export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate
  }

  get name(): string { return this._name; }

  set name(name: string) { this._name = name; }

  get birthDate(): Date { return this._birthDate }

  set birthDate(birthDate: Date) { this._birthDate = birthDate }
}