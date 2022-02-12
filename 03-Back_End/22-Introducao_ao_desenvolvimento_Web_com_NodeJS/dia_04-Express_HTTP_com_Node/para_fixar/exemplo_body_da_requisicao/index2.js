const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/validaToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid token!'});

  res.status(200).json({message: 'Valid token!'});
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})