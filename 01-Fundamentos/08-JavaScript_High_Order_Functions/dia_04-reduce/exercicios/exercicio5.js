const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const countA = names.reduce((acc, name) => {
    for (let letter of name) {
      if (letter === 'a' || letter === 'A') {
        acc += 1;
      }
    }
    return acc;
  }, 0);
  return countA;
}

console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
