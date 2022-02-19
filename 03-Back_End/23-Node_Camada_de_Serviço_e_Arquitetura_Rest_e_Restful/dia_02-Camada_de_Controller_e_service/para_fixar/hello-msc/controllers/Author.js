const Joi = require('joi');
const Author = require('../services/Author');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
}

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
}

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    firstName: Joi.string().not().empty().required(),
    // Deve ser uma string não vazia e é obrigatório
    lastName: Joi.string().not().empty().required(),
  })
   // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
  .validate({ firstName, lastName }); 

  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // da nova pessoa autora

  return res.status(201).json(newAuthor);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}