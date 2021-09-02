const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (right, student) => {
  let count = 0;
  for (let key in right) {
    if (right[key] === student[key]) count += 1;
    if (right[key] !== student[key] && student[key] !== 'N.A') count -= 0.5;
  }
  return count;
}

const finalScore = (rightAnswers, studentAnswers, func) => {
  const score = func(rightAnswers, studentAnswers);
  return score;
}

console.log(finalScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));