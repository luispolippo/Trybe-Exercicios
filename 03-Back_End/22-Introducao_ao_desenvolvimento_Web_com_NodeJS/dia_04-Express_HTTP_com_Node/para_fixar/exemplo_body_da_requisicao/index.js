const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  {id:1, name: 'Lasanha', price: 40.0, waitTime: 30},
  {id:2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25},
  {id:3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25},
];

/* 
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
]; */

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created sucessfully!' });
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})

/* fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
}); */