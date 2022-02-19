const express = require('express');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(express.json());

//Essa rota nao passa pelo middleware de autenticação!
app.get('/open', function(req, res) {
  res.send('open!');
})

app.get('/fechado', authMiddleware, function (req,res) {
  res.send('closed');
})

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});