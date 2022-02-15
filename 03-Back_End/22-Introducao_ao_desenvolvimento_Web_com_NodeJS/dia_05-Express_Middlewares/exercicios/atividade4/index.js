const express = require('express');
const fs = require('fs/promises');

const app = express();
app.use(express.json());

const validaDados = (req, res, next) => {
  const { name, initials, country, league="" } = req.body;
  const isNameValid = name.length > 5;
  const isInitialsValid = initials.length < 4 && initials === initials.toUpperCase();
  const isCountryValid = country.length > 3;

  if(!(isNameValid && isInitialsValid && isCountryValid)) {
    return res.status(400).json({message: 'invalid data'});
  }

  req.team = {name, initials, country, league};

  next();
}

const readFile = async (fileName) => {
  try{
    const file = await fs.readFile('./arquivo.json');
    return JSON.parse(file);
  } catch(e) {
    return null;
  }
}

const writeFile = async (fileName, content) => {
  try {
    const fileArray = await readFile(fileName);
    fileArray.push(content);

    await writeFile(fileName, JSON.stringify(fileArray));

    return content;
  } catch(err) {
    return null;
  }
};

app.get('/teams', async (req, res) => {
  const file = await readFile('./arquivo.json') || [];

  res.status(200).json({file});
});

app.post('/teams', validaDados, async (req, res) => {
  const team = await writeFile('./arquivo.json', req.team);

  res.status(201).json(team);
});

app.listen(3001, () => console.log('Escutando porta 3001'));