const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adiciona propriedades à um objeto
const addProp = (object, key, value) => {
  object[key] = value;
};

addProp(lesson2, 'turno', 'manhã');
console.log(lesson2);

console.log('-------------------');

// lista chaves de um objeto
const listKeys = (object) => {
  const keysArray = Object.keys(object);
  for (let keys in keysArray) {
    console.log(keysArray[keys]);
  }
};

listKeys(lesson2);

console.log('-------------------');

// mostra tamanho de um objeto
const objectLength = (object) => {
  const keysArray = Object.keys(object);
  console.log(keysArray.length);
};

objectLength(lesson2);

console.log('-------------------');

// lista valores de um objeto
const listValues = (object) => {
  const valuesArray = Object.values(object);
  for (let values in valuesArray) {
    console.log(valuesArray[values]);
  }
};

listValues(lesson2);

console.log('-------------------');

// cria objeto allLessons e agrupa lessons
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
console.log(allLessons);

console.log('-------------------');

// mostra número total de estudantes
const showTotalStudents = () => {
  const totalStudentes =
    allLessons.lesson1.numeroEstudantes +
    allLessons.lesson2.numeroEstudantes +
    allLessons.lesson3.numeroEstudantes;
  console.log(`Total de estudantes: ${totalStudentes}`);
};

showTotalStudents();

console.log('-------------------');

// obtem valor da chave de acordo com a posição
const getValueByPosition = (object, position) => {
  const keysArray = Object.keys(object);
  console.log(object[keysArray[position]]);
};

getValueByPosition(lesson1, 0);

console.log('-------------------');

// verifica se o par chave valor existe
const keyValueExists = (object, key, value) => {
  const objectEntries = Object.entries(object);
  for (let index in objectEntries) {
    if (objectEntries[index][0] === key && objectEntries[index][1] === value) {
      return true;
    }
  }
  return false;
};

console.log(keyValueExists(lesson3, 'professor', 'Maria Clara'));

console.log('-------------------');

// BÔNUS
// conta quantos estudantes assistiram aulas de matemática
const showMathStudents = () => {
  let count = 0;
  const keys = Object.keys(allLessons);
  for (let index in keys) {
    if (allLessons[keys[index]].materia === 'Matemática') {
      count += allLessons[keys[index]].numeroEstudantes;
    }
  }
  return count;
};

console.log(showMathStudents());

console.log('-------------------');

//Cria relatório do professor
const createReport = (object, prof) => {
  const lessons = Object.keys(object);
  const professor = prof;
  const subjects = [];
  let students = 0;
  let count = 0;

  for (let index in lessons) {
    if (object[lessons[index]].professor === professor) {
      subjects.push(object[lessons[index]].materia);
      students += object[lessons[index]].numeroEstudantes;
      count += 1;
    }
  }

  if (count === 0) {
    return 'Professor não encontrado';
  }

  const relatorio = {
    professor: professor,
    aulas: subjects,
    estudantes: students,
  };

  return relatorio;
};

console.log(createReport(allLessons, 'Carlos'));
