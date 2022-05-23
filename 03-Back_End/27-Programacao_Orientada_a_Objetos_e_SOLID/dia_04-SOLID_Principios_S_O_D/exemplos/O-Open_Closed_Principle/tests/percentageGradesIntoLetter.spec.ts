// ./tests/percentageGradesIntoLetters.spec.ts

import { expect } from "chai";
import { percentageGradesIntoLetters } from "../src";


describe('Testando a função "percentageGradesIntoLetters"', function () {
  describe('quando é passado um array de disciplinas válidas', function () {
    const disciplines = [
      { name: "name", grade: 0.9 },
      { name: "name", grade: 0.8 },
      { name: "name", grade: 0.7 },
      { name: "name", grade: 0.6 },
      { name: "name", grade: 0.1 },
      { name: "name", grade: 0.05 },
    ];
    const resultDisciplines = percentageGradesIntoLetters(disciplines);

    const expectedGrades = ['A', 'B', 'C', 'D', 'E', 'F'];
    const givenGrades = [...resultDisciplines.map(discipline => discipline.letterGrade)];

    for (let index = 0; index < disciplines.length; index += 1) {
      it(`retorna ${expectedGrades[index]} para a nota ${disciplines[index].grade}`, () => {
        expect(givenGrades[index]).to.be.equals(expectedGrades[index]);
      });
    }
  });
});