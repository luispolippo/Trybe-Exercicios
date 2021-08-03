const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;

function isTriangle(ang1, ang2, ang3){
  if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    return "ERRO! Angulo inválido";
  } else {
    let soma = ang1 + ang2 + ang3;
  
    if (soma == 180) {
      return true;
    } else {
      return false;
    }
  }
}



console.log(isTriangle(angulo1, angulo2, angulo3));
