const express = require('express');
const postsRouter = require('./postsRouter');

const app = express();

app.use('/posts', postsRouter);

app.listen(3001, () => {
  console.log('Escutando porta 3001');
});