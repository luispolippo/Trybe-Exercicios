const getObject = (object) => {
  const keysArray = Object.keys(object);
  for (let keys in keysArray) {
    console.log(`${keysArray[keys]}, Nível: ${object[keysArray[keys]]}`);
  }
}

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

getObject(student2);