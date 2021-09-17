const promise = new Promise((resolve, reject) => {
  let randomNumbers = [];
  for (let i = 1; i <= 10; i += 1) {
    const randomNumber = Math.floor(Math.random() * (50 - 1)) + 1;
    randomNumbers.push(randomNumber);
  }
  randomNumbers = randomNumbers.map((number) => number ** 2);

  const sumNumbers = randomNumbers.reduce((acc, curr) => acc + curr);

  if (sumNumbers < 8000) {
    const divisors = [2, 3, 5, 10];
    const divisions = divisors.map((divisor) => sumNumbers / divisor);
    resolve(divisions);
  } else {
    const err = 'É mais de oito mil! Essa promise deve estar quebrada!';
    reject(err);
  }
})
  .then((returnedValue) =>
    new Promise((resolve, reject) => {
      const sum = returnedValue.reduce((acc, curr) => acc + curr);
      resolve(sum);
    }).then((result) => console.log(result))
  )
  .catch((err) => console.log(err));
