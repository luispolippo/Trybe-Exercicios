const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();
app.use(express.json());

app.use('/book', bookRouter);

app.listen(3000, () => console.log('Ouvindo na porta 3000'));