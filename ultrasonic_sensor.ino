// Pins define karein
const int trigPin = 5;
const int echoPin = 18;

// Variables
long duration;
int distance;

void setup() {
  Serial.begin(115200); // Serial monitor ki speed
  pinMode(trigPin, OUTPUT); // Trig pin signal bhejegi
  pinMode(echoPin, INPUT);  // Echo pin signal receive karegi
}

void loop() {
  // Pehle Trig pin ko clear karte hain
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // 10 microseconds ke liye Trig pin ko HIGH karte hain
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Echo pin se travel time read karte hain
  duration = pulseIn(echoPin, HIGH);

  // Distance calculate karein (speed of sound 0.034 cm/us hai)
  distance = duration * 0.034 / 2;
  // filter lgana hai 
   if(distance>200 || distance <=0){
    Serial.println("object are not found");
   }
   else{
    Serial.println("correct distance ");
   }

  // Serial Monitor par result dikhayein
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(1000); // Har aadhe second baad update hoga
}