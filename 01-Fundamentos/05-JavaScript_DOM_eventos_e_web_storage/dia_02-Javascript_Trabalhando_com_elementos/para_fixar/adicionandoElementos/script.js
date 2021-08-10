let elementoAtual = document.getElementById('elementoOndeVoceEsta');

let sectionIrmaoAtual = document.createElement('section');

sectionIrmaoAtual.innerHTML = 'irmão de elementoOndeVoceEsta';

elementoAtual.parentNode.appendChild(sectionIrmaoAtual);

let sectionFilhoAtual = document.createElement('section');

sectionFilhoAtual.innerHTML = 'Filho de elementoOndeVoceEsta';

elementoAtual.appendChild(sectionFilhoAtual);

let divFilhoDoFilho = document.createElement('div');

divFilhoDoFilho.innerHTML = 'filho de primeiroFilhoDoFilho';

elementoAtual.firstElementChild.appendChild(divFilhoDoFilho);

let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho div');

console.log(filhoDoFilho.parentNode.parentNode.parentNode.children[2]);