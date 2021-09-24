let randomNumber = require('./randomNumbers');

test('testa randomNumbers', () => {
  randomNumber = jest.fn().mockReturnValue(10);

  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(10);
});