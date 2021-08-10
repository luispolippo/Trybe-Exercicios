// Requisito 1
let h1 = document.createElement("h1");
h1.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(h1);

// Requisito 2
let main = document.createElement("main");
main.className = "main-content";
document.body.appendChild(main);

// Requisito 3
let sectionCenterContent = document.createElement("section");
sectionCenterContent.className = "center-content";
document.getElementsByTagName("main")[0].appendChild(sectionCenterContent);

// Requisito 4
let tagP = document.createElement("p");
tagP.innerHTML = "Texto que está dentro de uma tag P";
document.getElementsByClassName("center-content")[0].appendChild(tagP);

// Requisito 5
let sectionLeftContent = document.createElement("section");
sectionLeftContent.className = "left-content";
document
  .getElementsByClassName("main-content")[0]
  .appendChild(sectionLeftContent);

// Requisito 6
let sectionRightContent = document.createElement("section");
sectionRightContent.className = "right-content";
document
  .getElementsByClassName("main-content")[0]
  .appendChild(sectionRightContent);

// Requisito 7
let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
document.getElementsByClassName("left-content")[0].appendChild(img);

// Requisito 8
const nums = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

let ulList = document.createElement("ul");
document.getElementsByClassName("right-content")[0].appendChild(ulList);

let list = document.querySelector(".right-content ul");
for (let i = 0; i < nums.length; i += 1) {
  let num = nums[i];
  let listItem = document.createElement("li");
  listItem.innerHTML = num;
  list.appendChild(listItem);
}

//Requisito 9
for (let i = 1; i <= 3; i += 1) {
  let h3 = document.createElement("h3");
  document.getElementsByClassName("main-content")[0].appendChild(h3);
}

// Parte 2

// Requisito 1
document.getElementsByTagName("h1")[0].className = "title";

// Requisito 2
let h3s = document.getElementsByTagName("h3");

for (let i = 0; i < h3s.length; i += 1) {
  let h3 = h3s[i];
  h3.className = "description";
}

// Requisito 3
let leftSection = document.getElementsByClassName("left-content")[0];

document.getElementsByClassName("main-content")[0].removeChild(leftSection);

// Requisito 4
let rightSection = document.getElementsByClassName("right-content")[0];
rightSection.style.marginRight = "auto";

// Requisito 5
let paiSectionCenter =
  document.getElementsByClassName("center-content")[0].parentNode;

paiSectionCenter.style.backgroundColor = "green";

//Requisito 6

for (let i = 1; i <= 2; i += 1) {
  ulList.removeChild(ulList.lastElementChild);
}
