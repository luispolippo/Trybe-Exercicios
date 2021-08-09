function paragraphText(){
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = 'Daqui a 2 anos me vejo trabalhando como desenvolvedor em uma empresa de tecnologia';
}

function mainColor(){
  let mainColor = document.getElementsByClassName('main-content')[0];
  mainColor.style.backgroundColor = 'rgb(76,164,109)';
}

function centerColor(){
  let centerColor = document.getElementsByClassName('center-content')[0];
  centerColor.style.backgroundColor = 'rgb(255, 255, 255)';
}

function corrigeH1(){
  let titulo = document.getElementsByClassName('title')[0];
  titulo.innerHTML = 'Exercício 5.1 - JavaScript'
}

function pToUpper(){
  let paragraph = document.getElementsByTagName('p')[0].innerHTML;
  let paragraphUpper = paragraph.toUpperCase();
  document.getElementsByTagName('p')[0].innerHTML = paragraphUpper;
}

function pToConsole(){
  let paragraphs = document.getElementsByTagName('p');
  let text = '';
  for (let i = 0; i < paragraphs.length; i += 1){
    text += paragraphs[i].innerHTML;
  }
  console.log(text);
}

paragraphText();
mainColor();
centerColor();
corrigeH1();
pToUpper();
pToConsole();