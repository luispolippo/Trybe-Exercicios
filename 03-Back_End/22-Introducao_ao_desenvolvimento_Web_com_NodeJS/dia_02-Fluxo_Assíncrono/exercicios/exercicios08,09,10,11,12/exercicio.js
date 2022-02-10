const fizzBuzz = (num) => {
  return new Promise((resolve, reject) => {
    if (num <= 0) reject(new Error('Numero deve ser maior que zero'));
    if (num % 3 === 0 && num % 5 === 0) resolve('FizzBuzz');
    if(num % 5 === 0) resolve('Buzz');
    if(num % 3 === 0) resolve('Fizz');
    reject(new Error(num));
  })
}

fizzBuzz(2)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));