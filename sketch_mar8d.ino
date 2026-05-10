
void setup() {
  // Sab pins ko output banayein
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(14, OUTPUT);
  pinMode(27, OUTPUT);
}
// forward 
void loop() {
digitalWrite(13,1);
digitalWrite(12,0);
digitalWrite(14,1);
digitalWrite(27,0);
delay(2000);
//stop
digitalWrite(13,0);
digitalWrite(12,0);
digitalWrite(14,0);
digitalWrite(27,0);
delay(3000);

//duty cycle
analogWrite(13,255);
analogWrite(12,0);
analogWrite(14,255);
analogWrite(27,0);
//stop
delay(2000);

analogWrite(13,127);
analogWrite(12,0);
analogWrite(14,127);
analogWrite(27,0);

delay(3000);






}