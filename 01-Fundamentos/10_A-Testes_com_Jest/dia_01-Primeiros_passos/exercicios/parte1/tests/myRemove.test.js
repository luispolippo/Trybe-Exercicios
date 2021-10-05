const myRemove = require('../src/myRemove');

describe('Recebe um array e retorna uma cópia sem o elemento passado por parâmetro', () => {
  it('Verifica se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se não retorna o array igual', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado não sofreu alteração', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
  });
  it('Verifica se retorna o mesmo array quando não houver o valor passado por parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});