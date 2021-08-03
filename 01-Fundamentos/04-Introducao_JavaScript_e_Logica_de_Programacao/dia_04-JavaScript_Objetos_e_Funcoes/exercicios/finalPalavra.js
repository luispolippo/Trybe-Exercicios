function endingLength(ending) {
  return ending.length;
}

function cutWord(word, length) {
  let palavraArray = word.split("");
  finalPalavra = palavraArray.splice(-length, Number.MAX_VALUE);
  return finalPalavra;
}

function endWord(word, ending) {
  let endingLen = endingLength(ending);
  let finalPalavra = cutWord(word, endingLen);
  let finalPalavraString = finalPalavra.join("");

  if (finalPalavraString === ending) {
    return true;
  } else {
    return false;
  }
}

console.log(endWord("joaofernando", "fernan"));
