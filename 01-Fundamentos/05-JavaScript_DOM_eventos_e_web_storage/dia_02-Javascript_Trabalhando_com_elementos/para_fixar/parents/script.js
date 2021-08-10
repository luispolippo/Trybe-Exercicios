let elementoAtual = document.getElementById('elementoOndeVoceEsta');

let elementoPai = elementoAtual.parentNode;

elementoPai.style.color = 'red';

elementoAtual.firstElementChild.innerHTML = 'Texto do filho do filho';

console.log(elementoPai.firstElementChild);

console.log(elementoAtual.previousElementSibling);

console.log(elementoAtual.nextSibling);

console.log(elementoAtual.nextElementSibling);

console.log(elementoPai.children[2])