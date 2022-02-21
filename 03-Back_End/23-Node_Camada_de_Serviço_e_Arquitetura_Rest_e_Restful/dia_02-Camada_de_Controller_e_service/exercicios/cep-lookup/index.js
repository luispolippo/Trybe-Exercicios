const express = require('express');
const pingMiddleware = require('./controllers/ping');
const CEP = require('./controllers/CEP');
const error = require('./controllers/middlewares/error');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/ping', pingMiddleware);

app.get('/cep/:cep', CEP.getByCEP);

app.post('/cep', CEP.addCEP);

app.use(error);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



