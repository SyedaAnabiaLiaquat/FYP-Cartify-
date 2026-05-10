// Left Sensor Pins
const int trigL = 5;
const int echoL = 18;

// Right Sensor Pins
const int trigR = 19;
const int echoR = 21;

void setup() {
  Serial.begin(115200);
  pinMode(trigL, OUTPUT); pinMode(echoL, INPUT);
  pinMode(trigR, OUTPUT); pinMode(echoR, INPUT);
}

// Function: Distance ko filter karne ke liye
long getFilteredDistance(int trig, int echo) {
  long total = 0;
  int samples = 5; // 5 dafa read karke average nikalenge

  for (int i = 0; i < samples; i++) {
    digitalWrite(trig, LOW);
    delayMicroseconds(2);
    digitalWrite(trig, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig, LOW);
    
    long duration = pulseIn(echo, HIGH, 30000); // 30ms timeout taake code hang na ho
    long distance = duration * 0.034 / 2;
    
    // Filter: Agar reading 0 ya 400 se zyada ho to usse ignore karein
    if (distance <= 0 || distance > 400) distance = 400; 
    
    total += distance;
    delay(10); // Chota sa gap samples ke darmiyan
  }
  return total / samples;
}

void loop() {
  long distanceL = getFilteredDistance(trigL, echoL);
  long distanceR = getFilteredDistance(trigR, echoR);
  
  Serial.print("Filtered L: ");
  Serial.print(distanceL);
  Serial.print(" cm | Filtered R: ");
  Serial.print(distanceR);
  Serial.println(" cm");
  
  delay(200); 
}