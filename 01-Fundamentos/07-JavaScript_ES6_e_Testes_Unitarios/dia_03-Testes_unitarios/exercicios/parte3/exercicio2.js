const assert = require('assert'); 

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 1;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] !== 'a' &&
      characters[index] !== 'o' &&
      characters[index] !== 'i' &&
      characters[index] !== 'e' &&
      characters[index] !== 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push(count);
      count += 1;
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result, "O retorno deve ter suas vogais substituídas por números na ordem em que aparecem");