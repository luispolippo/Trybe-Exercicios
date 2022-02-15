const express = require('express');
const postsRouter = require('./postsRouter');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.use('/posts', postsRouter);

app.use('*', (_req, _res, next) => next(err))
app.use(errorMiddleware);

app.listen(3001, () => {
  console.log('Escutando porta 3001');
});