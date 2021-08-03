function maisCaracteres(array) {
  let arrayNomes = stringParaArray(array);
  let maiorLength = arrayNomes[0].length;
  let valueMaiorLength = arrayNomes[0];

  for (let key in arrayNomes) {
    if (arrayNomes[key].length > maiorLength){
      maiorLength = arrayNomes[key].length;
      valueMaiorLength = arrayNomes[key];
    }
  }
  return valueMaiorLength.join("");
}

function stringParaArray(arrayDeStrings) {
  let arrayLetras = [];
  for (let value of arrayDeStrings) {
    let nomes = value.split("");
    arrayLetras.push(nomes);
  }
  return arrayLetras;
}


let array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "Bartolomeu"];

console.log(maisCaracteres(array));
