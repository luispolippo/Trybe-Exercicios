let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplyNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let mult;
  if (index === numbers.length - 1) {
    mult = numbers[index] * 2;
  } else {
    mult = numbers[index] * numbers[index + 1];
  }
  multiplyNumbers.push(mult);
}

console.log(multiplyNumbers);
