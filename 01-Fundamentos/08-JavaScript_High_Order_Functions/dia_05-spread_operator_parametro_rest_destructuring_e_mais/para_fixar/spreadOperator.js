// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Creme de Leite', 'Sorvete'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));