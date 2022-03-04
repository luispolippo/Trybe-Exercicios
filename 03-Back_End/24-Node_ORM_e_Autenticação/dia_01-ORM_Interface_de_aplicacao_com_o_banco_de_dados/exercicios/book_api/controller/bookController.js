const { Book } = require('../models');

const findAll = async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    if (!deleteBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(204).end();
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  findAll,
  findById,
  createBook,
  updateBook,
  deleteBook,
}