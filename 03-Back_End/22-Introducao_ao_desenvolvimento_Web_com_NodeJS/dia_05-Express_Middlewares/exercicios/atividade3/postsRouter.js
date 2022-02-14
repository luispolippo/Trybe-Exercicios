const express = require('express');
const router = express.Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

const verificaId = (req, res, next) => {
  const { id } = req.params;
  const idExists = posts.some((post) => post.id === parseInt(id));
  if (!idExists) return res.status(404).json({message: 'post not found'});

  next();
}

router.get('/:id', verificaId, (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === parseInt(id));
  res.status(200).json({post});
});

module.exports = router;
