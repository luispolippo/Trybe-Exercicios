const fs = require('fs').promises;

const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const createFilePromises = arrayStrings.map((string, index) => 
  fs.writeFile(`./file${index + 1}.txt`, string)
);

Promise.all(createFilePromises)
  .then(() => 'arquivos escritos com sucesso');

const readFileArray = [];
for (let i = 0; i < arrayStrings.length; i += 1) {
  readFileArray.push(fs.readFile(`./file${i + 1}.txt`));
}

Promise.all(readFileArray)
  .then((result) => {
    fs.writeFile('./fileAll.txt', result.join(" "));
  });