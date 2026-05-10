#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

// Ultrasonic sensors: left aur right side par user ki position estimate karne ke liye.
const int trigL = 5;
const int echoL = 18;
const int trigR = 19;
const int echoR = 21;

// Motor driver pins: left motor aur right motor ki direction control.
const int IN1 = 12;
const int IN2 = 13;
const int IN3 = 14;
const int IN4 = 27;

// PWM frequency aur resolution smooth acceleration aur gradual turning ke liye use ho rahe hain.
const int PWM_FREQ = 18000;
const int PWM_RES = 8;
const int PWM_MAX = 255;

// Yeh thresholds decide karte hain ke cart kab rukay, kab follow kare aur kab reverse ho.
const float COLLISION_STOP_CM = 16.0;
const float TARGET_NEAR_CM = 28.0;
const float TARGET_FAR_CM = 58.0;
const float MAX_TRACK_CM = 140.0;
const float CENTER_TOLERANCE_CM = 6.0;

// PWM limits: forward, reverse aur steering ki speed ko control karte hain.
const int MIN_FORWARD_PWM = 95;
const int MAX_FORWARD_PWM = 180;
const int MIN_REVERSE_PWM = 85;
const int MAX_REVERSE_PWM = 130;
const int MAX_STEER_PWM = 70;
const int SEARCH_CREEP_PWM = 82;
const int SEARCH_STEER_PWM = 42;
const int SPEED_RAMP_STEP = 8;

const unsigned long LOST_TARGET_TIMEOUT_MS = 650;
const float FILTER_ALPHA = 0.35;

// Filtered values raw sensor noise ko smooth karte hain.
float filteredLeft = MAX_TRACK_CM;
float filteredRight = MAX_TRACK_CM;
unsigned long lastSeenMs = 0;

// Current aur target speed alag rakhne se speed ek dum jump nahi karti.
int currentLeftSpeed = 0;
int currentRightSpeed = 0;
int targetLeftSpeed = 0;
int targetRightSpeed = 0;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_Cartify");

  pinMode(trigL, OUTPUT);
  pinMode(echoL, INPUT);
  pinMode(trigR, OUTPUT);
  pinMode(echoR, INPUT);

  // New ESP32 core mein LEDC pin ke sath directly attach hota hai.
  ledcAttach(IN1, PWM_FREQ, PWM_RES);
  ledcAttach(IN2, PWM_FREQ, PWM_RES);
  ledcAttach(IN3, PWM_FREQ, PWM_RES);
  ledcAttach(IN4, PWM_FREQ, PWM_RES);

  // Start mein motors ko forcefully stop rakho.
  stopNow();
  Serial.println("System ready. Battery on karte hi cart active hogi.");
}

long readRawDistance(int trig, int echo) {
  // Standard ultrasonic trigger pulse.
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  // Timeout ki wajah se sensor hang nahi karega.
  long duration = pulseIn(echo, HIGH, 26000);
  if (duration == 0) {
    return 400;
  }

  // Invalid ya out-of-range reading ko far distance treat karte hain.
  long distance = duration * 0.034 / 2;
  if (distance < 2 || distance > 400) {
    return 400;
  }
  return distance;
}

long medianOf3(long a, long b, long c) {
  // 3 readings mein se middle value noise spikes ko reject karti hai.
  if ((a >= b && a <= c) || (a >= c && a <= b)) return a;
  if ((b >= a && b <= c) || (b >= c && b <= a)) return b;
  return c;
}

float readStableDistance(int trig, int echo) {
  // Ek hi sensor ko 3 dafa read karke stable distance nikaal rahe hain.
  long a = readRawDistance(trig, echo);
  delay(5);
  long b = readRawDistance(trig, echo);
  delay(5);
  long c = readRawDistance(trig, echo);
  return (float)medianOf3(a, b, c);
}

float clampFloat(float value, float low, float high) {
  if (value < low) return low;
  if (value > high) return high;
  return value;
}

int mapFloatToInt(float value, float inMin, float inMax, int outMin, int outMax) {
  if (value <= inMin) return outMin;
  if (value >= inMax) return outMax;
  float ratio = (value - inMin) / (inMax - inMin);
  return (int)(outMin + ratio * (outMax - outMin));
}

void updateDistances() {
  // Dono sensors ki fresh readings lo.
  float leftNow = readStableDistance(trigL, echoL);
  float rightNow = readStableDistance(trigR, echoR);

  // Exponential smoothing se sudden jumps kam hote hain.
  filteredLeft = (FILTER_ALPHA * leftNow) + ((1.0 - FILTER_ALPHA) * filteredLeft);
  filteredRight = (FILTER_ALPHA * rightNow) + ((1.0 - FILTER_ALPHA) * filteredRight);

  filteredLeft = clampFloat(filteredLeft, 2.0, 400.0);
  filteredRight = clampFloat(filteredRight, 2.0, 400.0);
}

void setMotorChannel(int forwardPin, int reversePin, int speedValue) {
  // Positive speed = forward, negative speed = reverse, zero = stop.
  int pwm = constrain(abs(speedValue), 0, PWM_MAX);
  if (speedValue > 0) {
    ledcWrite(forwardPin, pwm);
    ledcWrite(reversePin, 0);
  } else if (speedValue < 0) {
    ledcWrite(forwardPin, 0);
    ledcWrite(reversePin, pwm);
  } else {
    ledcWrite(forwardPin, 0);
    ledcWrite(reversePin, 0);
  }
}

void applyMotorSpeeds(int leftSpeed, int rightSpeed) {
  // Left aur right wheel ko independently drive karke smooth steering milti hai.
  setMotorChannel(IN2, IN1, leftSpeed);
  setMotorChannel(IN3, IN4, rightSpeed);
}

void stopNow() {
  // Emergency hard stop: current aur target dono zero.
  currentLeftSpeed = 0;
  currentRightSpeed = 0;
  targetLeftSpeed = 0;
  targetRightSpeed = 0;
  applyMotorSpeeds(0, 0);
}

void rampTowardTarget() {
  // Speed ko step-by-step target ki taraf le jao taa ke jerk na aaye.
  currentLeftSpeed += constrain(targetLeftSpeed - currentLeftSpeed, -SPEED_RAMP_STEP, SPEED_RAMP_STEP);
  currentRightSpeed += constrain(targetRightSpeed - currentRightSpeed, -SPEED_RAMP_STEP, SPEED_RAMP_STEP);
  applyMotorSpeeds(currentLeftSpeed, currentRightSpeed);
}

void commandStop() {
  // Soft stop: ramp function dheere dheere zero tak layegi.
  targetLeftSpeed = 0;
  targetRightSpeed = 0;
}

void computeFollowCommand() {
  // Check karo kya user left/right sensor range mein nazar aa raha hai.
  bool leftSeen = filteredLeft < MAX_TRACK_CM;
  bool rightSeen = filteredRight < MAX_TRACK_CM;

  if (leftSeen || rightSeen) {
    // Last seen time future lost-target detection ke liye save hota hai.
    lastSeenMs = millis();
  }

  // Bohat close object ya person aaye to foran stop.
  if ((leftSeen && filteredLeft <= COLLISION_STOP_CM) || (rightSeen && filteredRight <= COLLISION_STOP_CM)) {
    commandStop();
    return;
  }

  // Agar user kuch dair tak nazar na aaye to cart ruk jaye.
  if (millis() - lastSeenMs > LOST_TARGET_TIMEOUT_MS) {
    commandStop();
    return;
  }

  // Follow distance decide karo: dono sensors hon to average, warna available side.
  float followDistance = MAX_TRACK_CM;
  if (leftSeen && rightSeen) {
    followDistance = (filteredLeft + filteredRight) * 0.5;
  } else if (leftSeen) {
    followDistance = filteredLeft;
  } else if (rightSeen) {
    followDistance = filteredRight;
  }

  // Left-right difference se pata chalta hai user kis side par shift hua hai.
  float balanceError = 0.0;
  if (leftSeen && rightSeen) {
    balanceError = filteredRight - filteredLeft;
  } else if (leftSeen) {
    balanceError = 24.0;
  } else if (rightSeen) {
    balanceError = -24.0;
  }

  // User door ho to forward, bohat paas ho to reverse correction, warna hold position.
  int baseSpeed = 0;
  if (followDistance > TARGET_FAR_CM) {
    baseSpeed = mapFloatToInt(followDistance, TARGET_FAR_CM, MAX_TRACK_CM, MIN_FORWARD_PWM, MAX_FORWARD_PWM);
  } else if (followDistance < TARGET_NEAR_CM) {
    baseSpeed = -mapFloatToInt(followDistance, COLLISION_STOP_CM, TARGET_NEAR_CM, MAX_REVERSE_PWM, MIN_REVERSE_PWM);
  }

  // Steering adjustment jitna error utna turn, magar limit ke andar.
  int steerAdjust = 0;
  if (abs(balanceError) > CENTER_TOLERANCE_CM) {
    steerAdjust = constrain((int)(balanceError * 2.5), -MAX_STEER_PWM, MAX_STEER_PWM);
  }

  // Reverse ke waqt steering ko halka rakho taa ke cart unstable na ho.
  if (baseSpeed < 0) {
    steerAdjust /= 2;
  }

  // Agar distance theek ho lekin user side par ho to halki creeping turn se align karo.
  if (baseSpeed == 0 && abs(balanceError) > CENTER_TOLERANCE_CM) {
    targetLeftSpeed = SEARCH_CREEP_PWM - (steerAdjust / 2);
    targetRightSpeed = SEARCH_CREEP_PWM + (steerAdjust / 2);
  } else {
    targetLeftSpeed = baseSpeed - steerAdjust;
    targetRightSpeed = baseSpeed + steerAdjust;
  }

  targetLeftSpeed = constrain(targetLeftSpeed, -PWM_MAX, PWM_MAX);
  targetRightSpeed = constrain(targetRightSpeed, -PWM_MAX, PWM_MAX);

  // Agar user bohat zyada side par ho to arc turn ko thora aur strong karo.
  if (abs(balanceError) > 28.0 && baseSpeed > 0) {
    targetLeftSpeed = constrain(baseSpeed - SEARCH_STEER_PWM - (steerAdjust / 2), -PWM_MAX, PWM_MAX);
    targetRightSpeed = constrain(baseSpeed + SEARCH_STEER_PWM + (steerAdjust / 2), -PWM_MAX, PWM_MAX);
  }
}

void loop() {
  // Bluetooth disconnect ka matlab safety stop.
  if (!SerialBT.hasClient()) {
    commandStop();
    rampTowardTarget();
    delay(35);
    return;
  }

  updateDistances();
  computeFollowCommand();
  rampTowardTarget();

  // Serial monitor par live debugging values milengi.
  Serial.print("L=");
  Serial.print(filteredLeft, 1);
  Serial.print("cm  R=");
  Serial.print(filteredRight, 1);
  Serial.print("cm  targetL=");
  Serial.print(targetLeftSpeed);
  Serial.print("  targetR=");
  Serial.println(targetRightSpeed);

  delay(35);
}
