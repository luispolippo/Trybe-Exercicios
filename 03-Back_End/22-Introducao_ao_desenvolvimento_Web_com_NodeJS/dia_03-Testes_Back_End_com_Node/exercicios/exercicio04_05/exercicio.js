const fs = require('fs');

const writeInFile = (nomeDoArquivo, conteudoDoArquivo) => {
  try {
    fs.writeFileSync(nomeDoArquivo, conteudoDoArquivo);
    return 'OK';
  } catch(err) {
    return null;
  }
}

module.exports = writeInFile;