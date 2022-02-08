const readline = require("readline-sync");

let jogarDenovo = true;

while(jogarDenovo) {
  const randomNumber = Math.floor(Math.random() * 11);

  const number = readline.questionInt('Escolha um número de 0 a 10: ');
  let resultMessage = "";

  if(randomNumber === number) {
    resultMessage = "Parabéns, número correto!\n";
  } else {
    resultMessage = `Opa, não foi dessa vez. O número era ${randomNumber}\n`;
  }

  console.log(resultMessage);

  const deNovo = readline.question("Jogar de novo?(sim/não)");
  if (deNovo !== "sim" && deNovo !== "Sim") {
    jogarDenovo = false;
  }
}

module.exports = jogarDenovo;
