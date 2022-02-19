const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (typeof authorization !== 'string' || authorization.length !== 12) {
    return res.status(401).json({message: 'invalid token'});
  }

  next();
};

app.get('/btc/price', validateToken, async (_req, res) => {
  const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(response.data.bpi);
});

app.listen(3001, () => {
  console.log('Escutando na porta 3001');
});
