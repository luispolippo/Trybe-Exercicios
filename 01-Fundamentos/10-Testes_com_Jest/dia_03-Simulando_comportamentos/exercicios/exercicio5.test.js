const func = require('./funcoes4e5');

test('#Exercicio 5', () => {
  const toLower = jest.spyOn(func, 'toUpperCase').mockImplementation((string) => string.toLowerCase());

  toLower('OLÁ');
  expect(toLower).toHaveBeenCalledTimes(1);
  expect(toLower('OLÁ')).toBe('olá');
  expect(toLower).toHaveBeenCalledTimes(2);

  func.toUpperCase.mockRestore();

  expect(func.toUpperCase('olá')).toBe('OLÁ');

});