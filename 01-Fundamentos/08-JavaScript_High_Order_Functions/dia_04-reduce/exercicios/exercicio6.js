const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  // escreva seu código aqui
  const studentsObj = grades.map((grade, index) => {
    const sumGrades = grade.reduce((acc, number) => acc + number);
    const avgGrade = sumGrades / grade.length;

    return {
      name: students[index],
      average: avgGrade,
    };
  });
  return studentsObj;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());
assert.deepStrictEqual(studentAverage(), expected);
