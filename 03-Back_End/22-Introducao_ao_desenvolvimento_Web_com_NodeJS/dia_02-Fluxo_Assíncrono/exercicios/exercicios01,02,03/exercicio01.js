
function promise3Numbers(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
      reject(new Error('Informe apenas números'));
    }

    const resultado = (num1 + num2) * num3;

    if (resultado < 50) reject(new Error('Valor muito baixo'));

    resolve(resultado);
  })
}

module.exports = promise3Numbers;