let { fetchApi, result } = require('./exercicio6');

test('#Exercicio 6', () => {
  fetchApi = jest.fn()
  .mockResolvedValue('request sucess')
  .mockRejectedValue('request failed');

  fetchApi();
  expect(fetchApi).toHaveBeenCalledTimes(1);
  expect(result()).resolves.toBe('request sucess');
});