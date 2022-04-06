import crypto from 'crypto';
import Person from './Person';

export default class Student extends Person {
  private _name: string;
  private _birthDate: Date;
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date) {
    super();
    this._name = name;
    this._birthDate = birthDate;
    this._enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get name(): string { return this._name }

  get birthDate(): Date { return this._birthDate };

  get examsGrade(): number[] {
    return this._examsGrades;
  }

  get worksGrade(): number[] {
    return this._worksGrades;
  }

  get enrollment(): string {
    return this._enrollment;
  }
  
  public addExamGrade(grade: number) {
    this._examsGrades.push(grade);
  } 

  public addWorkGrade(grade: number) {
    this._worksGrades.push(grade);
  }

  private generateEnrollment() {
    return crypto.randomBytes(8).toString('hex');
  }

  public sumGrades(): number {
    const testsSum = this._examsGrades.reduce((acc, cur) => {
      return acc + cur;
    });
    const worksSum = this._worksGrades.reduce((acc, cur) => {
      return acc + cur;
    });
    return testsSum + worksSum;
  }

  public gradesAvg(): number {
    const totalGrades = this.sumGrades();
    return totalGrades/6;
  }
}