const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], "Deve retornar array sem o valor passado na parâmetro item");
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], "Deve retornar array sem o valor passado na parâmetro item");
const array = [1, 2, 3, 4];
const expected = myRemoveWithoutCopy(array, 3);
assert.deepStrictEqual(expected, array, 'Array deve mudar depois da chamada da função');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], "Array não deve mudar se não houver o item passado por parâmetro");
