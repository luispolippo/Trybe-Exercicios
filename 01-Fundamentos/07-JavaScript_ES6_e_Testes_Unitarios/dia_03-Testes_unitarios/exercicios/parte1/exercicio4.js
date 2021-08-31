const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Deve retornar fizzbuzz se for divisível por 3 e por 5');
assert.strictEqual(myFizzBuzz(9), 'fizz', "Deve retornar fizz se for divisível por 3");
assert.strictEqual(myFizzBuzz(5), 'buzz', 'Deve retornar buzz se for divisível por 5');
assert.strictEqual(myFizzBuzz(4), 4, "Deve retornar o próprio numero de parâmetro caso não seja divisível nem por 3 nem por 5");
assert.strictEqual(myFizzBuzz('banana'), false, "Deve retornar false caso o parâmetro não seja um número");