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

function calculaINSS(salarioBruto) {
  if (salarioBruto <= 1556.94) {
    return salarioBruto * aliquota08;
  } else if (salarioBruto <= 2594.92) {
    return salarioBruto * aliquota09;
  } else if (salarioBruto <= 5189.82) {
    return salarioBruto * aliquota11;
  } else {
    return aliquotaMax;
  }
}

function calculaIR(salarioBase) {
  if (salarioBase <= 1903.98) {
    return 0;
  } else if (salarioBase <= 2826.65) {
    return salarioBase * aliquota075 - 142.8;
  } else if (salarioBase <= 3751.05) {
    return salarioBase * aliquota15 - 354.8;
  } else if (salarioBase <= 4664.68) {
    return salarioBase * aliquota225 - 636.13;
  } else {
    return salarioBase * aliquota275 - 869.36;
  }
}

function calculaSalario(salarioBruto) {
  let INSS = calculaINSS(salarioBruto);
  let salarioBase = salarioBruto - INSS;
  let IR = calculaIR(salarioBase);

  return salarioBase - IR;
}


console.log(calculaSalario(salarioBruto));
