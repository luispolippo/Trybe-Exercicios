const express = require('express');
const pingMiddleware = require('./controllers/ping');
const CEP = require('./controllers/CEP');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/ping', pingMiddleware);

app.get('/cep/:cep', CEP.getByCEP);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



