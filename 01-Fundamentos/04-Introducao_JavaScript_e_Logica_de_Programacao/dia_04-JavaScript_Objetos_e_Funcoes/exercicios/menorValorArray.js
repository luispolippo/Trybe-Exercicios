function indexOfMenorValor(array) {
  let menorValor = array[0];

  for (let key in array) {
    if (array[key] < array[menorValor]) {
      menorValor = key;
    }
  }
  return menorValor;
}

array = [2, 3, 6, -7, 0, 8, 3];

console.log(indexOfMenorValor(array));
