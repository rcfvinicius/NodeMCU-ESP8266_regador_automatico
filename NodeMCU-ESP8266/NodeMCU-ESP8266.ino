#include <ESP8266WiFi.h>        /* bilblioteca adequada para wifi esp8266 */
#include <ESP8266HTTPClient.h>  /* biblioteca para acesso à API */

#define REDEWIFI "MotoG5"
#define SENHA "09080706"

unsigned long intervalo = 5000;
unsigned long tempoAnterior = 0;

void setup() {
  unsigned long tempoAtual = millis();
  Serial.begin(9600);
  //Serial.begin(115200);
  WiFi.begin( REDEWIFI , SENHA );

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connectando à rede WIFI..:");
    //Serial.println(REDEWIFI);
  }
  Serial.print("CONECTADO à rede WIFI ");
  //Serial.println(REDEWIFI);
  
  //sensor umidade
  pinMode(5, INPUT); //D1
  //sensor de nivel
  pinMode(17, INPUT); //A0
  //bomba
  pinMode(4, OUTPUT); //D2
  pinMode(0, OUTPUT); //D3
  pinMode(2, OUTPUT); //D4
  Serial.println("final do setup");
}

void loop() {
  unsigned long tempoAtual = millis();
  //digitalWrite(4, LOW);
  //digitalWrite(0, LOW);
  //digitalWrite(2, LOW);
  if(WiFi.status() == WL_CONNECTED){
    WiFiClient client;
    HTTPClient http;

    //sensor de nivel
    if(analogRead(17) < 900){
      delay(2500);
      env("http://rcfvinicius.pythonanywhere.com/nivelaguabaixo");
      delay(2500);
      while(analogRead(17) < 900){
        delay(100);
        Serial.println("Nivel de agua baixo!!");
      }
      env("http://rcfvinicius.pythonanywhere.com/nivelagua");
    }



    if(!digitalRead(5) && ((tempoAtual-tempoAnterior) > intervalo)){
      //regar
      env("http://rcfvinicius.pythonanywhere.com/node");
      tempoAnterior = tempoAtual;
      digitalWrite(4, HIGH);
      digitalWrite(0, HIGH);
      digitalWrite(2, HIGH);
      delay(10000);
      digitalWrite(4, LOW);
      digitalWrite(0, LOW);
      digitalWrite(2, LOW);
    }
    }
    delay(100);
   }
   



void env (char *endereco){
    WiFiClient client;
    HTTPClient http;
    http.begin(client, endereco);
    int httpCode = http.POST(".");

    if (httpCode > 0) {                           // Verificando o retorno da requisição
    String retorno = http.getString();    // obtendo o retorno da requisição
    Serial.println( retorno );            // mostrando o retorno
  }
  else {
    Serial.print("Erro na requisição:");
  }
  http.end(); 
}
