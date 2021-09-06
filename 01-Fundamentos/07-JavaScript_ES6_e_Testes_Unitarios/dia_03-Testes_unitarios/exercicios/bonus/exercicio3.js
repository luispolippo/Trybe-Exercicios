const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (array) => {
  const middleIndex = ((array.length + 1) / 2) - 1;
  const middleValue = [array[middleIndex]];
  array.splice(middleIndex, 1);
  return middleValue;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);