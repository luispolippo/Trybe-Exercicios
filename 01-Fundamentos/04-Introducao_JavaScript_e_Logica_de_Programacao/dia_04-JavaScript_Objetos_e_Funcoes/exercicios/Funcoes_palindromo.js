function isPalindrome(palavra) {
  let palavraDividida = palavra.split("");
  let arrayInvertido = palavraDividida.reverse();
  let palavraInvertida = arrayInvertido.join("");

  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

palavra = "arara"

console.log(isPalindrome(palavra))