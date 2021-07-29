let angulo1 = 90;
let angulo2 = 45;
let angulo3 = 45;
let result;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  result = "ERRO! Angulo inválido";
} else {
  let soma = angulo1 + angulo2 + angulo3;

  if (soma == 180) {
    result = true;
  } else {
    result = false;
  }
}

console.log(result);
