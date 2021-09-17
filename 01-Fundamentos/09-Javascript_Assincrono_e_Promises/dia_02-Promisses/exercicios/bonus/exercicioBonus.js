async function promise() {
  let randomNumbers = [];
  for (let i = 1; i <= 10; i += 1) {
    const randomNumber = Math.floor(Math.random() * (50 - 1)) + 1;
    randomNumbers.push(randomNumber);
  }
  randomNumbers = randomNumbers.map((number) => number ** 2);

  const sumNumbers = randomNumbers.reduce((acc, curr) => acc + curr);

  if (sumNumbers < 8000) {
    const divisors = [2, 3, 5, 10];
    return divisors.map((divisor) => sumNumbers / divisor);
  } else {
    const err = 'É mais de oito mil! Essa promise deve estar quebrada!';
    throw new Error(err);
  }
}

async function treatPromise() {
  const nums = await promise()
    .then((message) => message.reduce((acc, curr) => acc + curr))
    .catch((err) => err);
  console.log(nums);
}

treatPromise();
