let n = 7;
let meioPiramide = (n + 1) / 2;
let aEsquerda = meioPiramide;
let aDireita = meioPiramide;
let linha = "";

for (let i = 1; i <= meioPiramide; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j === aEsquerda ||  j === aDireita || i === meioPiramide) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  console.log(linha);
  linha = "";
  aEsquerda -= 1;
  aDireita += 1;
}
