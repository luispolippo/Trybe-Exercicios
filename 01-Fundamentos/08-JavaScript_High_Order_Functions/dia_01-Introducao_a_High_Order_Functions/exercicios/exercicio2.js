const compareNumbers = (num1, num2) => {
  if (num1 === num2) return true;
  return false;
}

const prizeResult = (bet, func) => {
  const randomNumber = parseInt((Math.random() * 5) + 1);
  result = func(bet, randomNumber);
  console.log(`Número sorteado: ${randomNumber}`)
  if (result) return 'Parabéns você ganhou';
  return 'Tente novamente'; 
}

console.log(prizeResult(5, compareNumbers));