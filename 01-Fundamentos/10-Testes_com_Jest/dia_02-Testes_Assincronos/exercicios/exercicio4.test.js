const fetch = require('node-fetch');


const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

test('Testa se o retorno contém os arrays passados', async () => {
  const results = await getRepos('https://api.github.com/orgs/tryber/repos');
  const expectedRepos = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];
  expect(results).toEqual(expect.arrayContaining(expectedRepos));
});