const fetch = require('node-fetch');

const fetchApi = async (url) => {
  return fetch(url).then((response) =>
    response.json().then((json) => {
      if (response.ok) return Promise.resolve(json);
      return Promise.reject(json);
    })
  );
};

module.exports = { fetchApi };
