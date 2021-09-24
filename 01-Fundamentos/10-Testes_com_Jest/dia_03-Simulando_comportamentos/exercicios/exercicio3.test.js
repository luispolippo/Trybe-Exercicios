let randomNumber = require('./randomNumbers');

test('#Exercício 3', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  randomNumber(2, 2, 2);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);
  expect(randomNumber(2, 2, 2)).toBe(8);

  randomNumber.mockRestore();

  randomNumber.mockImplementation((a) => a * 2);
  expect(randomNumber(2)).toBe(4);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2);
});