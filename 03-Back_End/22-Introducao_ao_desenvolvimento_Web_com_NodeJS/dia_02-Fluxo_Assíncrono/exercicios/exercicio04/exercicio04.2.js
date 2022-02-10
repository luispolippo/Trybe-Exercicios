const fs = require('fs')

const readFile = (nomeArquivo) => {
  const data = fs.readFileSync(nomeArquivo, 'utf8');
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

const findSimpson = (id) => {
  return new Promise((resolve, reject) => {
    const data = readFile('./simpsons.json');
    const simpsonFound = data.find((simpson) => simpson.id === id);
    if (!simpsonFound) reject(new Error('id não encontrado'));
    resolve(simpsonFound.name);
  });
}

findSimpson("3")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));