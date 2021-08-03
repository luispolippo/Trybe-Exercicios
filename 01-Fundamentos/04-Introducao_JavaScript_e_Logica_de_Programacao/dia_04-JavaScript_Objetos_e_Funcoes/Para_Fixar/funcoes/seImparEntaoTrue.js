const num1 = 7;
const num2 = 15;
const num3 = 33;

function isOdd(num1, num2, num3){
  if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    return true;
  } else {
    return false;
  }
}



console.log(isOdd(num1, num2, num3));
