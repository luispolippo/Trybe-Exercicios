const { encode, decode } = require('../src/encode_decode');

describe('Encode transforma vogais em númerose decode transforma números em vogais', () => {
  it('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Verifica se a,e,i,o,u vira 1,2,3,4,5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Verifica se 1, 2, 3, 4, 5 vira a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('Verifica se outras letras e números não são convertidos', () => {
    expect(encode('b, c, d, f')).toBe('b, c, d, f');
    expect(decode('b, c, d, f')).toBe('b, c, d, f');
  });
  it('Verifica se a string passada por parâmetro tem o mesmo número de letras que a string retornada', () => {
    expect(encode('Hi There!')).toHaveLength(9);
  });
});
