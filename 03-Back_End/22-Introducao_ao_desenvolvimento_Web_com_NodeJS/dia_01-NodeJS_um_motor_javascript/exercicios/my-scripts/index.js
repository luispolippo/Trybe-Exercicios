const readline = require("readline-sync");

console.log("Para executar algum script digite o número correspondente");
console.log("1 - IMC");
console.log("2 - Velocidade");
console.log("3 - Sorteio");
const option = readline.questionInt("Digite o número do script: ");

switch (option) {
  case 1: {
    require("./imc");
    break;
  }
  case 2: {
    require("./velocidade");
    break;
  }
  case 3: {
    require("./sorteio");
    break;
  }
  default: {
    console.log("Opção não disponivel")
  }
}
