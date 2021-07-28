let nota = 90;
let result;

if (nota < 0 || nota > 100) {
  result = "Erro! Nota inválida";
} else {
  if (nota >= 90) {
    result = "A";
  } else if (nota >= 80) {
    result = "B";
  } else if (nota >= 70) {
    result = "C";
  } else if (nota >= 60) {
    result = "D";
  } else if (nota >= 50) {
    result = "E";
  } else if (nota < 50) {
    result = "F";
  }
}

console.log(result);
