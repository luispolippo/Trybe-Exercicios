import readline from 'readline-sync';
import connection from './models/connection';

import BookModel, { Book } from './models/Books';

const main = async () => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Digite o nome do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title, price, author, isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook);
}

main();