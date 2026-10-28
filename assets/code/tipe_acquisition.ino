// Code extrait des annexes A9-A10 du TIPE fourni par Adam El Mehdi.
const byte pinsCapteurs[4] = {2, 3, 4, 5};
const byte ETAT_DETECTION = LOW;

unsigned long temps[4];

void setup() {
  Serial.begin(115200);
  for (byte i = 0; i < 4; i++) {
    pinMode(pinsCapteurs[i], INPUT_PULLUP);
  }
}

void attendrePassage(byte i) {
  while (digitalRead(pinsCapteurs[i]) != ETAT_DETECTION) {}
  temps[i] = micros();
  while (digitalRead(pinsCapteurs[i]) == ETAT_DETECTION) {}
}

void loop() {
  for (byte i = 0; i < 4; i++) {
    attendrePassage(i);
  }

    float dt12 = (temps[1] - temps[0]) / 1000000.0;
    float dt23 = (temps[2] - temps[1]) / 1000000.0;
    float dt34 = (temps[3] - temps[2]) / 1000000.0;

    float v12 = 0.10 / dt12;
    float v23 = 0.10 / dt23;
    float v34 = 0.10 / dt34;
    float vInf = (v23 + v34) / 2.0;

    Serial.print("v12 = "); Serial.println(v12, 4);
    Serial.print("v23 = "); Serial.println(v23, 4);
    Serial.print("v34 = "); Serial.println(v34, 4);
    Serial.print("v_inf = "); Serial.println(vInf, 4);

    delay(1500);
}
