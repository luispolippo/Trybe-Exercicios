import { Drive } from "./interfaces";

class Car implements Drive {
  drive(): void { console.log('Drive a car'); }
}