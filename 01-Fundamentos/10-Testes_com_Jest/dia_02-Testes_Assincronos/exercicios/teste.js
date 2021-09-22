const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) return resolve(animal);
      return reject({ error: 'Nenhum animal com esse nome!' });
    }, 200);
  });
};

const getAnimal = async (name) =>// Adicione o código aqui.
  await findAnimalByName(name)
  .then((animal) => animal)
  .catch((error) => error.message);

console.log(getAnimal('Soneca'));