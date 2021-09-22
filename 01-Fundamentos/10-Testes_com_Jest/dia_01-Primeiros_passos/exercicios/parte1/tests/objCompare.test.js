const { obj1, obj2, obj3 } = require('../src/objCompare');

describe('Compara dois objetos e verifica se são iguais', () => {
  it('Verifica se obj1 e obj2 são iguais', () => {
    expect(obj1).toEqual(obj2);
  });
  it('Verifica se obj1 e obj3 são diferentes', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('Verifica se obj2 e obj3 são diferentes', () => {
    expect(obj2).not.toEqual(obj3);
  });
});