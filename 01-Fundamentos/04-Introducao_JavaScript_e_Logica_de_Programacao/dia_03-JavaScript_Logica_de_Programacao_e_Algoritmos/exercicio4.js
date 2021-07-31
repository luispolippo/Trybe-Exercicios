let n = 9;
let meioPiramide = (n + 1) / 2;
let linha = "";
let aEsquerda = meioPiramide;
let aDireita = meioPiramide;

for (let i = 0; i <= meioPiramide; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j > aEsquerda &&  j < aDireita) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  console.log(linha);
  linha = "";
  aDireita += 1;
  aEsquerda -= 1;
}

