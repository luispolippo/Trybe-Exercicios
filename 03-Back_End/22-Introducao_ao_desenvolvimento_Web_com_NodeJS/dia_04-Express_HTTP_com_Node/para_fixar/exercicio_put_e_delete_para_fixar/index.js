const express = require('express');

const app = express();
app.use(express.json());

const recipes = [
  {id:1, name: 'Lasanha', price: 40.0, waitTime: 30},
  {id:2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25},
  {id:3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25},
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


app.get('/recipes', (_req, res) => {
  res.json(recipes);
});

app.put('/recipes/:id', (req, res) => {
  const {id} = req.params;
  const {name, price} = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({message: 'Recipe not found'});

  recipes[recipeIndex] = {...recipes[recipeIndex], name, price};

  return res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const {id} = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({message: 'Recipe not found'});

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});

app.get('/drinks', (_req, res) => {
  return res.status(200).json(drinks);
})

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found' });

  drinks[drinkIndex] = {...drinks[drinkIndex], name, price};

  return res.status(204).end();
})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found' });

  drinks.splice(drinkIndex, 1);
  
  return res.status(204).end();
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})

/* // Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}); */