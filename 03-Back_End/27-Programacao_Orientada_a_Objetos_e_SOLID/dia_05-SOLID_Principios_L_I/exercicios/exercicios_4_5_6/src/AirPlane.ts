import { Fly } from "./interfaces";

class AirPlane implements Fly {
  drive(): void {
    throw new Error("Method not implemented.");
  }
  fly(): void {
    console.log('Flying a airplane');
  }

}