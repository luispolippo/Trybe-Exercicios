interface Fly {
  _flightNumber: number;
  _destination: string;
  _arriveDate: Date;

  startFlight(): void;
  endFlight(): void;
}

class Fly {
  constructor(flightNumber: number, destination: string, arriveDate: Date) {
    this._flightNumber = flightNumber;
    this._destination = destination;
    this._arriveDate = arriveDate;
  }

  startFlight() {
    console.log('Flight has begun');
  }

  endFlight() {
    console.log('Fligth is over');
  }
}