// Tratando erros de forma assíncrona
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error("Não pode ser feito divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
}

dividirNumeros(2, 0)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.error(`erro: ${err.message}`));