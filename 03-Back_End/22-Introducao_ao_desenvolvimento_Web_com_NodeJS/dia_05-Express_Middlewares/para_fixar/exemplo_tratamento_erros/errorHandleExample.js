/* Jamais devemos realizar a leitura de um arquivo do sistema de arquivos 
dessa forma. Concatenar parâmetros recebidos do usuário diretamente na 
chamada para qualquer método representa uma falha gigantesca 
de segurança. Vamos fazer isso aqui nesse momento para fins didáticos.  */

const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', async (req, res, next) => {
  try {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  } catch(err) {
    next(err);
  }
})

app.use((err, req, res, next) => {
  res.status(500).json({error: `Erro: ${err.message}`});
});

app.listen(3002, () => {
  console.log('Escutando na porta 3002');
});