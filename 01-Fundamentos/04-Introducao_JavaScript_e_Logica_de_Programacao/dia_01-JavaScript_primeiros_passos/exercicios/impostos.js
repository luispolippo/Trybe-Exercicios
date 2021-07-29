//Constantes de aliquotas INSS

const aliquota08 = 0.08;
const aliquota09 = 0.09;
const aliquota11 = 0.11;
const aliquotaMax = 570.88;

//Constantes de aliquatas IR
const aliquota075 = 0.075;
const aliquota15 = 0.15;
const aliquota225 = 0.225;
const aliquota275 = 0.275;
//------------------------------

let salarioBruto = 3000;
let INSS;
let IR;

if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * aliquota08;
} else if (salarioBruto <= 2594.92) {
  INSS = salarioBruto * aliquota09;
} else if (salarioBruto <= 5189.82) {
  INSS = salarioBruto * aliquota11;
} else {
  INSS = aliquotaMax;
}

let salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
  IR = 0;
} else if (salarioBase <= 2826.65) {
  IR = salarioBase * aliquota075 - 142.8;
} else if (salarioBase <= 3751.05) {
  IR = salarioBase * aliquota15 - 354.8;
} else if (salarioBase <= 4664.68) {
  IR = salarioBase * aliquota225 - 636.13;
} else {
  IR = salarioBase * aliquota275 - 869.36;
}

let salarioLiquido = salarioBase - IR;

console.log(salarioLiquido);
