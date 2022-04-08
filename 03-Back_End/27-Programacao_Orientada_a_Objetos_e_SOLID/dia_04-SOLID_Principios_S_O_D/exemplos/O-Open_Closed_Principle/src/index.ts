type Discipline = {
  name: string,
  grade: number,
  letterGrade?: string
}

type School = {
  name: string;
  approvalGrade: number;
};

type Student = {
  name: string,
  disciplines: Discipline[],
  school: School,
}

const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

  const percentageGradesIntoLetters = (student: Student): Student => ({
    ...student,
    disciplines: student.disciplines.map(getLetterGrades),
  });

    const approvedStudents = ({ disciplines, school }: Student): boolean =>
    disciplines.every(({ grade }) => grade >= school.approvalGrade);

  const updateApprovalData = (student: Student): void => {
    console.log(`A pessoa com nome ${student.name} foi aprovada!`);
  
    student.disciplines.forEach(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`));
  };

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getGradeLetter,
  getLetterGrades,
};
