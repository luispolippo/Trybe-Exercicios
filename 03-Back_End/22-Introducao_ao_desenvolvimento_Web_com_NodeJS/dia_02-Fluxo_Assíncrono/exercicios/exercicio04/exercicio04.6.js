const fs = require('fs')

const readFile = (nomeArquivo) => {
  const data = fs.readFileSync(nomeArquivo, 'utf8');
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

const simpsonsData = readFile('./simpsons.json');
const simpsonFound = simpsonsData.find(({name}) => name === "Maggie Simpson");

const familyData = readFile('./simpsonFamily.json');
const filteredFamilyData = familyData.filter(({name}) => name !== "Nelson Muntz");
filteredFamilyData.push(simpsonFound);

const writeFile = (nomeArquivo, data) => {
  const convertedData = JSON.stringify(data);
  fs.writeFileSync(nomeArquivo, convertedData);
  console.log('Arquivo escrito com sucesso.');
}

writeFile('./simpsonFamily.json', filteredFamilyData);