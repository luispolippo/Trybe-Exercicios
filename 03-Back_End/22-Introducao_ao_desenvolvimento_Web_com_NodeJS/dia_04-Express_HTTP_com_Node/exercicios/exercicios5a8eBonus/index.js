const express = require('express');
const fs = require('fs/promises');
const crypto = require('crypto');
const simpsonsFile = require('./simpsons.json');

const app = express();
app.use(express.json());

// Exercicio Bonus 1
const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({message: 'Necessário token'});
    if (token.length !== 16) return res.status(401).json({message: 'Token inválido!'});
    next();
  } catch(err) {
    next(err);
  }
};

// Exercicio 6
app.get('/simpsons', auth, (_req, res, next) => {
  try {
    res.status(200).json(simpsonsFile);
  } catch(err) {
    next(err)
  }
})

// Exercicio 7
app.get('/simpsons/:id', auth, (req, res, next) => {
  try {
    const {id} = req.params;

    const simpsonFound = simpsonsFile.find((s) => s.id === id);
    if (!simpsonFound) return res.status(404).json({message: 'simpson not found'});

    return res.status(200).json(simpsonFound);

  } catch(err) {
    next(err);
  }
})

// Exercicio 8
app.post('/simpsons', auth, async (req, res, next) => {
  try {
    const {id, name} = req.body;
    
    const isIdExist = simpsonsFile.some((s) => s.id === id);
    if (isIdExist) return res.status(409).json({message: 'id already exists'});

    const newSimpson = {id, name};
    simpsonsFile.push(newSimpson);
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFile));
    return res.status(204).end();
  } catch(err) {
    next(err);
  }
})

// Exercicio Bonus 2
app.post('/signup', (req, res, next) => {
  try{
    const { email, password, firstName, phone } = req.body;

    if (!email || !password || !firstName || !phone) return res.status(401)
      .json({message: 'missing fields'});

    token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token });

  } catch(err) {
    next(err);
  }
})

app.use((err, _req, res, _next) => {
  console.log(err)
  return res.status(500).send('Internal Server Error');
});

app.listen(3001, () => {
  console.log('Escutando porta 3001');
});