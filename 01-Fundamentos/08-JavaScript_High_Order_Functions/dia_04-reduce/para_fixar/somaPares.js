const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Usando reduce e filter
const evenSum = numbers.filter((number) => number % 2 === 0).reduce((acc, number) => acc + number);

console.log(evenSum);

// Usando somente reduce
const sumEven = numbers.reduce((acc, number) => {
  if (number % 2 === 0) {
    return acc + number;
  } else {
    return acc;
  }
})

console.log(sumEven);