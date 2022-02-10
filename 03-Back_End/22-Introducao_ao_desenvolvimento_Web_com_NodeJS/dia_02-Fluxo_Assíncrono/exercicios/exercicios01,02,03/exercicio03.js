const promise3Numbers = require('./exercicio01');

const geraNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100 + 1);
}

/* promise3Numbers(geraNumeroAleatorio(), geraNumeroAleatorio(), geraNumeroAleatorio())
  .then((result) => console.log(`Sucesso: ${result}`))
  .catch((err) => console.error(`Erro: ${err.message}`)); */

async function main() {
  try {
    const resultado = await promise3Numbers(geraNumeroAleatorio(), geraNumeroAleatorio(), geraNumeroAleatorio());
    console.log(`Sucesso: ${resultado}`);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
}

main();