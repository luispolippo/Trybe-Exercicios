class Student {
  private _matricula: string;
  private _name: string;
  private _testGrades: number[];
  private _courseworkGrades: number[];

  constructor(matricula: string, name: string, testsGrade: number[], courseworksGrades: number[]) {
    this._matricula = matricula;
    this._name = name;
    this._testGrades = testsGrade;
    this._courseworkGrades = courseworksGrades;
  }

  public sumGrades(): number {
    const testsSum = this._testGrades.reduce((acc, cur) => {
      return acc + cur;
    });
    const worksSum = this._courseworkGrades.reduce((acc, cur) => {
      return acc + cur;
    });
    return testsSum + worksSum;
  }

  public gradesAvg(): number {
    const totalGrades = this.sumGrades();
    return totalGrades/6;
  }
}

const student1 = new Student("00001", "João", [50, 80, 80, 60], [80, 90]);
console.log('Soma das notas', student1.sumGrades());
console.log('Média das notas', student1.gradesAvg());