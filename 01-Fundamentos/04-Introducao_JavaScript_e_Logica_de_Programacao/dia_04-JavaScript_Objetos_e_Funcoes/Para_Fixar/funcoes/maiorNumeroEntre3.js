const a = 70;
const b = 50;
const c = 20;

function biggerNum(a, b, c){
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(biggerNum(a, b, c));
