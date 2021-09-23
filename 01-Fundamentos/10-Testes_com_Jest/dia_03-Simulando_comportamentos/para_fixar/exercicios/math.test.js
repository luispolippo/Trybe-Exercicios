
const math = require('./math');

// Exercicio 1
test('#subtrair', () => {
  const mockSubtrair = jest.spyOn(math, 'subtrair');
  math.subtrair(2, 1);

  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(2, 1);
  expect(mockSubtrair(2, 1)).toBe(1);
});

// Exercicio 2
test('#multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();
  
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar).toHaveBeenCalledTimes(2);
});

// Exercicio 3
test('#somar', () => {
  math.somar = jest.fn().mockImplementation((a, b) => a + b);
  math.somar(5, 5);

  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(5, 5);
  expect(math.somar(5, 5)).toBe(10);
})

// Exercicio 4
test('#dividir', () => {
  math.dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  expect(math.dividir).toHaveBeenCalledTimes(0);
  expect(math.dividir(4, 2)).toBe(2);
  expect(math.dividir).toHaveBeenCalledWith(4, 2);
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir(10, 2)).toBe(5);
  expect(math.dividir).toHaveBeenCalledWith(10, 2);
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledWith();
  expect(math.dividir).toHaveBeenCalledTimes(3);
});

// Exercicio 5
test('#subtrair e resetar', () => {
  math.subtrair.mockRestore();

  const mockSubtrair = jest.spyOn(math, 'subtrair').mockReturnValue(20);

  mockSubtrair();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair()).toBe(20);
  expect(mockSubtrair).toHaveBeenCalledTimes(2);

  math.subtrair.mockRestore();

  expect(math.subtrair(5, 4)).toBe(1);
});