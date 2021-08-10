let paiDoPai = document.getElementById('paiDoPai');
let filhosPaiDoPai = paiDoPai.children;

for (let i = 0; i < filhosPaiDoPai.length; i += 1){
  let filho = filhosPaiDoPai[i];
  if (filho.id !== 'pai') {
    paiDoPai.removeChild(filho);
    i -= 1;
  }
}

let pai = paiDoPai.firstElementChild;
let filhosPai = pai.children;

for (let i = 0; i < filhosPai.length; i += 1){
  let filho = filhosPai[i];
  if(filho.id !== 'elementoOndeVoceEsta'){
    pai.removeChild(filho);
    i -= 1;
  }
}

let elementoAtual = pai.firstElementChild;
let filhosElementoAtual = elementoAtual.children;

for (let i = 0; i < filhosElementoAtual.length; i += 1){
  let filho = filhosElementoAtual[i];
  if(filho.id !== 'primeiroFilhoDoFilho'){
    elementoAtual.removeChild(filho);
    i -= 1;
  }
}