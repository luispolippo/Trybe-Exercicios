const fetch = require('node-fetch');

const fetchApi = async (url) => {
  return fetch(url).then((response) =>
    response.json().then((json) => {
      if (response.ok) return Promise.resolve(json);
      return Promise.reject(json);
    })
  );
};

const result = async () => {
  return await fetchApi('https://dog.ceo/api/breeds/image/random').then((json) => console.log(json)).catch(() => console.log('json'));
};

result();

module.exports = { fetchApi, result };
