let n = 6;

for (let i = n; i > 0; i -= 1) {
  let linha = "";
  for (let j = i - 1; j > 0; j -= 1) {
    linha += " ";
  }
  for(let k = n - i; k >= 0 ; k -= 1){
    linha += "*";
  }
  
  console.log(linha);
}
