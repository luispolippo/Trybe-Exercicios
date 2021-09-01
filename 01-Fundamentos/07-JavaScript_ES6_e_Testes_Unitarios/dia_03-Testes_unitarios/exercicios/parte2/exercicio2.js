const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  const newArray = [];
  for (let value of array) {
    const letters = value.split('');
    newArray.push(letters.length);
  }
  return newArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
