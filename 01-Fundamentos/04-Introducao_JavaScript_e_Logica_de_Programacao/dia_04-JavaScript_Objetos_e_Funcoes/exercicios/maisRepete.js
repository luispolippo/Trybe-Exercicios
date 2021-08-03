function contaNumerosRepetidos(array) {
  let count = 0;
  let maisRepete = 0;
  let valueMaisRepete;
  for (let value of array) {
    let num = value;
    for (let value2 of array) {
      if (value === value2) {
        count += 1;
      }
    }
    if (count > maisRepete){
      maisRepete = count;
      valueMaisRepete = value;
    }
    count = 0;
  }
  return valueMaisRepete;
}

let arrayInteiros = [2, 3, 2, 5, 8, 2, 3];

console.log(contaNumerosRepetidos(arrayInteiros));