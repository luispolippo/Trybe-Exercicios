let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = 0;

for(let number of numbers){
  if(number > maiorValor){
    maiorValor = number;
  }
}

console.log(maiorValor);
