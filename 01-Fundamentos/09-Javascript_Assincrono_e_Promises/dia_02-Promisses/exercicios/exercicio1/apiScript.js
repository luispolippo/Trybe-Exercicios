// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.getElementById('jokeContainer');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const obj = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, obj)
  .then(response => response.json())
  .then(data => appendData(data));
};

const appendData = (data) => {
  jokeContainer.innerHTML = data.joke;
}

window.onload = () => fetchJoke();
