const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Array de saída não deve conter 3");
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], "Array de saída não deve conter 3");
const paramArray = [1, 2, 3, 4];
myRemove(paramArray, 3);
assert.deepStrictEqual(paramArray, [1, 2, 3, 4], "Array passado por parâmetro deve continuar sendo [1, 2, 3, 4]");
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "Se item não existir no array deve reotornar um array igual");