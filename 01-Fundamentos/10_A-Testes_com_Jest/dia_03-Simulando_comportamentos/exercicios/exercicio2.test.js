let randomNumbers = require('./randomNumbers');

test('#exercicio2', () => {
  
  randomNumbers = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomNumbers(10, 2)).toBe(5);
  expect(randomNumbers).toHaveBeenCalled();
  expect(randomNumbers()).toBe(undefined);  
  
});