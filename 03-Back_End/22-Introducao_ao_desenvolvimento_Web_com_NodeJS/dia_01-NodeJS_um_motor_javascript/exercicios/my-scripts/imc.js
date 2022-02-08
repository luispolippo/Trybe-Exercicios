const readline = require('readline-sync');

const peso = readline.questionFloat("Qual seu peso?");
const altura = readline.questionFloat("Qual sua altura?");
const IMCcalc = peso / altura ** 2;

let IMCstatus = "";

if (IMCcalc < 18.5) {
  IMCstatus = "Abaixo do peso (magreza)";
} else if (IMCcalc <= 24.9) {
  IMCstatus = "Peso normal";
} else if (IMCcalc <= 29.9) {
  IMCstatus = "Acima do peso (sobrepeso)";
} else if (IMCcalc <= 34.9) {
  IMCstatus = "Obesidade grau I";
} else if (IMCcalc <= 39.9) {
  IMCstatus = "Obesidade grau II";
} else {
  IMCstatus = "Obesidade grau III";
}

console.log(`${IMCcalc.toFixed(2)} - ${IMCstatus}`);

module.exports = IMCcalc;