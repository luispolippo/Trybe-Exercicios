let nota = 50;

function toConcept(nota){
  if (nota < 0 || nota > 100) {
    return "Erro! Nota inválida";
  } else {
    if (nota >= 90) {
      return "A";
    } else if (nota >= 80) {
      return "B";
    } else if (nota >= 70) {
      return "C";
    } else if (nota >= 60) {
      return "D";
    } else if (nota >= 50) {
      return "E";
    } else if (nota < 50) {
      return "F";
    }
  }
}



console.log(toConcept(nota));


