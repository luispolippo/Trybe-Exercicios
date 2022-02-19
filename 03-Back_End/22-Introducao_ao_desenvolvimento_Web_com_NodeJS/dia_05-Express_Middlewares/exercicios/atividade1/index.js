const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3001;

const userRouter = require('./userMiddleware');

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Escutando porta ${PORT}`);
})