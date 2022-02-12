const express = require('express');

// Exercicio 1
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

// Exercicio 2
app.post('/hello', (req, res) => {
  const {name} = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
})

// Exericicio 3
app.post('/greetings', (req, res) => {
  const {name, age} = req.body;
  
  if( age <= 17) return res.status(401).json({message: 'Unauthorized'});

  return res.status(200).json({message: `Hello, ${name}`});
})

// Exercicio 4
app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.params;

  return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
})

app.listen(3001, () => {
  console.log('Escutando porta 3001');
});