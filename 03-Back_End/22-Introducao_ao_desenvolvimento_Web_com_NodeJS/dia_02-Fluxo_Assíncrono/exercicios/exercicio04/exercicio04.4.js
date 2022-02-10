const fs = require('fs')

const readFile = (nomeArquivo) => {
  const data = fs.readFileSync(nomeArquivo, 'utf8');
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

const data = readFile('./simpsons.json');

const newData = data.filter(({id}) => (id === "1" || id === "2" || id === "3" || id === "4"));

const writeFile = (nomeArquivo, data) => {
  const convertedData = JSON.stringify(data);
  fs.writeFileSync(nomeArquivo, convertedData);
  console.log('Arquivo escrito com sucesso.');
}

writeFile('./simpsonFamily.json', newData);