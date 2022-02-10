
function whatIsThisNumber(num) {
  if(typeof num !== 'number') throw Error('parametro deve ser um numero');
  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  return 'neutro';
}

module.exports = whatIsThisNumber;