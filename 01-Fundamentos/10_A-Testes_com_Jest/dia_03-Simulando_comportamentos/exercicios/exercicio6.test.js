let { fetchApi } = require('./exercicio6');

describe('#Exercicio 6', () => {
  
  fetchApi = jest.fn();
  afterEach(() => fetchApi.mockRestore());
  
  test('#Exercicio 6 - Quando a Promise resolve', async () => {
    
    fetchApi.mockResolvedValue('request sucess');
    
    fetchApi();
    expect(fetchApi).toHaveBeenCalled();
    expect(fetchApi).toHaveBeenCalledTimes(1);
    await expect(fetchApi()).resolves.toBe('request sucess');
    expect(fetchApi).toHaveBeenCalledTimes(2);
  });
  
  test('#Exercicio 6 - Quando a Promise rejeita', async () => {
    fetchApi.mockRejectedValue('request failed');

    fetchApi();
    expect(fetchApi).toHaveBeenCalled();
    expect(fetchApi).toHaveBeenCalledTimes(1);
    await expect(fetchApi()).rejects.toBe('request failed');
    expect(fetchApi).toHaveBeenCalledTimes(2);
  });
});
  