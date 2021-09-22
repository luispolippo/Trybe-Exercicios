const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy');

describe('Recebe um array e um item e retorna o próprio array sem o elemento', () => {
  it('Verifica se retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);  
  });
  it('Verifica se não retorna o mesmo array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual(array);
  });
  it('Verifica se ao não achar o parâmetro, retorna o mesmo array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});