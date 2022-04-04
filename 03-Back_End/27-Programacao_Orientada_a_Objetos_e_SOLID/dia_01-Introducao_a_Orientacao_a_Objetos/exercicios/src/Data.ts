class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    if (day >= 1 && day <= 31) {
      this._day = day;
    } else {
      this._day = 1;
    }
    if (month >= 1 && month <= 12) {
      this._month = month;
    } else {
      this._month = 1;
    }
    if (year >= 1900 && year <= 2022) {
      this._year = year;
    } else {
      this._year = 1900;
    }
  }
}