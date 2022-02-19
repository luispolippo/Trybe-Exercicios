const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books');
  return books;
}

const getAuthorById = async (authorId) => {
  const [books] = await connection.execute(
    `SELECT title FROM model_example.books WHERE author_id =?`,
    [authorId]
  );
  return books;
};

const findById = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE id = ?';
  const book = await connection.execute(query,[id]);

  if (book.length === 0) return null;

  return book[0];
}

const isValid = async (title, authorId) => {
  if (!authorId) return false;
  if (!title) return false;
  if (title.length < 3) return false;
  const author = await Author.findById(authorId);
  if (!author) return false;

  return true;
}

const create = async (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, authorId],
  )
};

module.exports = {
  getAll,
  getAuthorById,
  findById,
  isValid,
  create,
}