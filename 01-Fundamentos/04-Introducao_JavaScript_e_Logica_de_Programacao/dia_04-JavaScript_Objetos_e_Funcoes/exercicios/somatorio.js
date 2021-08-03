function somatorio(num) {
  if (num < 1) {
    return false;
  }else {
    return num + somatorio(num - 1);
  }
}

let num = 10;

console.log(somatorio(num));
