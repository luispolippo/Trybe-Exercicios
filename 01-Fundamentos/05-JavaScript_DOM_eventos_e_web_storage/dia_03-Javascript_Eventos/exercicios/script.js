function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Requisito 1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const daysList = document.getElementById("days");

for (let i = 0; i < dezDaysList.length; i += 1) {
  let day = dezDaysList[i];
  let li = document.createElement("li");
  li.innerHTML = day;

  li.className = "day";
  if (day === 24 || day === 25 || day === 31) {
    li.className += " holiday";
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    li.className += " friday";
  }

  daysList.appendChild(li);
}

// Requisito 2
function createButtonHoliday(string){
  let button = document.createElement('button');
  button.innerHTML = string;
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button);
}

createButtonHoliday('Feriados');

// Requisito 3
function showHolidays() {
  let holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    let holiday = holidays[i];
    holiday.style.backgroundColor = 'rgb(101, 232, 126)'
  }
  buttonState = true;
}

function hideHolidays() {
  let holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    let holiday = holidays[i];
    holiday.style.backgroundColor = 'rgb(238,238,238)'
  }
  buttonState = false;
}

let buttonHolidays = document.getElementById('btn-holiday');

let buttonState = false;
buttonHolidays.addEventListener('click', function() {
  if(buttonState){
    hideHolidays();
  } else {
    showHolidays();
  }
});

// Requisito 4
function createButtonFriday(string){
  let btnFriday = document.createElement('button');
  btnFriday.innerHTML = string;
  btnFriday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btnFriday);
}

createButtonFriday('Sexta-feira');