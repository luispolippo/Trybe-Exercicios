let a = 30;
let b = 50;
let c = 20;

let result;

if (a > b && a > c) {
  result = a;
} else if (b > c) {
  result = b;
} else {
  result = c;
}

console.log(result);
