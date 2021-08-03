function indexOfMaiorValor(array) {
  let maiorValor = array[0];

  for (let key in array) {
    if (array[key] > maiorValor) {
      maiorValor = key;
    }
  }
  return maiorValor;
}

array = [2, 3, 6, 7, 0, 8];

console.log(indexOfMaiorValor(array));
