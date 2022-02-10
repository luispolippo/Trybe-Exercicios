const fs = require('fs')

const readFile = (nomeArquivo) => {
  const data = fs.readFileSync(nomeArquivo, 'utf8');
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

const showResults = (data) => {
  data.forEach((each) => {
    const {id, name} = each;
    console.log(`${id} - ${name}`);
  })
}

showResults(readFile('./simpsons.json'));
