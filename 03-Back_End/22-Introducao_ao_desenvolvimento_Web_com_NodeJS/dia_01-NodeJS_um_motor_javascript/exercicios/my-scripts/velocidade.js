const readline = require("readline-sync");

const distancia = readline.questionInt("Qual a distancia?");
const tempo = readline.questionInt("Qual o tempo?");

const velMedia = (distancia / tempo).toFixed(2);

console.log(`Velocidade média: ${velMedia} m/s`);

module.exports = velMedia;