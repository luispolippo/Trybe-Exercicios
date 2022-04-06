import crypto from 'crypto';
import Employee from './IEmployee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _name: string;
  private _birthDate: Date;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super();
    this._name = name;
    this._birthDate = birthDate;
    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get name(): string { return this._name };

  get birthDate(): Date { return this._birthDate };
  
  get registration(): string { return this._registration };

  get salary(): number { return this._salary };

  get admissionDate(): Date { return this._admissionDate };

  get subject(): Subject { return this._subject }

  set salary(salary: number) { this._salary = salary };

  set admissionDate(date: Date) { this._admissionDate = date };

  set subject(subject: Subject) { this._subject = subject };

  generateRegistration(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}