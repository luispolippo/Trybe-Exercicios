/* Jamais devemos realizar a leitura de um arquivo do sistema de arquivos 
dessa forma. Concatenar parâmetros recebidos do usuário diretamente na 
chamada para qualquer método representa uma falha gigantesca 
de segurança. Vamos fazer isso aqui nesse momento para fins didáticos.  */

const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/:fileName', [
    rescue(async (req, res) => {
      const file = await fs.readFile(`./${req.params.fileName}`);
      res.send(file.toString('utf-8'));
  }), 
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);

app.listen(3002, () => {
  console.log('Escutando na porta 3002');
});