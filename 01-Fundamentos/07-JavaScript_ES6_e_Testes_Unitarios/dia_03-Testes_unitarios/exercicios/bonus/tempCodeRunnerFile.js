function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (remaining < 0) {
    throw Error('paid value is not enough');
  }

  let count = 0;
  
  while(count !== remaining) {
    for (let value of coins) {
      count = 0;
      for (let value of change) {
        count += value;
      }
      if (remaining >= value && count !== remaining) {
        change.push(value);
      }
    }
  } 
    
  return change;
}

console.log(getChange(486, 600));