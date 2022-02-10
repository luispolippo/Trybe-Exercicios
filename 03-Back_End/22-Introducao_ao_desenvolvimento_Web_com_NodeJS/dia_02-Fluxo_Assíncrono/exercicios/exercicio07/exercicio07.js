const readline = require('readline');
const fs = require('fs').promises;

function question(message) {
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    })
  })
}

async function start() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const fileContent = await fs.readFile(fileName, 'utf8');
    const wordToReplace = await question('Digite a palavra a ser substituída: ');
    const newWord = await question('Digite a nova palavra: ');

    const newContent = fileContent.replace(wordToReplace, newWord);
    console.log(newContent);

    const newFileName = await question('Digite o arquivo de destino: ');
    await fs.writeFile(newFileName, newContent);
    
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start();