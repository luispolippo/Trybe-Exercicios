const sum = require('../src/sum')

describe('Retorna a soma do parâmetro a com o parâmetro b', () => {
  it('4 + 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});