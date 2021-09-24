const funcs = require('./funcoes4e5');
jest.mock('./funcoes4e5');

test('#Exercicio 4 - função 1', () => {
  funcs.uppercase.mockImplementation((string) => string.toLowerCase())

  funcs.uppercase('OLÁ');
  expect(funcs.uppercase).toHaveBeenCalled();
  expect(funcs.uppercase('OLÁ')).toBe('olá');
});

test('#Exercicio 4 - função 2', () => {
  funcs.firstLetter.mockImplementation((string) => string[string.length -1]);

  funcs.firstLetter('Olá');
  expect(funcs.firstLetter).toHaveBeenCalled();
  expect(funcs.firstLetter('Olá')).toBe('á');
});

test('#Exercicio 4 - função 3', () => {
  funcs.stringConcat.mockImplementation((string1, string2, string3) => string1.concat(string2.concat(string3)));

  funcs.stringConcat('Olá', ' pessoa', ' bonita');
  expect(funcs.stringConcat).toHaveBeenCalled();
  expect(funcs.stringConcat('Olá', ' pessoa', ' bonita')).toBe('Olá pessoa bonita');
});