const longestWorld = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = palavras[0];
  for (let i = 0; i < palavras.length; i += 1) {
    let palavra = palavras[i];
    maiorPalavra = palavra.length > maiorPalavra.length ? palavra : maiorPalavra;
  }
  return maiorPalavra;
} 

console.log(longestWorld('Antônio foi no banheiro e não sabemos o que aconteceu'));
