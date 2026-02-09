function generateCode() {
  document.getElementById("codePanel").innerText =
`// Auto-generated Arduino Code

int ledPin = ${state.ledPin};
int buttonPin = ${state.buttonPin};

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);
  digitalWrite(ledPin, buttonState);
}`;
}
