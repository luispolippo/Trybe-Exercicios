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
function showDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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
}

showDays();

// Requisito 2
function createButtonHoliday(string) {
  let button = document.createElement("button");
  button.innerHTML = string;
  button.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(button);
}

createButtonHoliday("Feriados");

// Requisito 3
function showHolidays() {
  let holidays = document.getElementsByClassName("holiday");
  for (let i = 0; i < holidays.length; i += 1) {
    let holiday = holidays[i];
    holiday.style.backgroundColor = "rgb(101, 232, 126)";
  }
  buttonState = true;
}

function hideHolidays() {
  let holidays = document.getElementsByClassName("holiday");
  for (let i = 0; i < holidays.length; i += 1) {
    let holiday = holidays[i];
    holiday.style.backgroundColor = "rgb(238,238,238)";
  }
  buttonState = false;
}

let buttonHolidays = document.getElementById("btn-holiday");

let buttonState = false;
buttonHolidays.addEventListener("click", function () {
  if (buttonState) {
    hideHolidays();
  } else {
    showHolidays();
  }
});

// Requisito 4
function createButtonFriday(string) {
  let btnFriday = document.createElement("button");
  btnFriday.innerHTML = string;
  btnFriday.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(btnFriday);
}

createButtonFriday("Sexta-feira");

// Requisito 5
function showFridays() {
  let fridays = document.getElementsByClassName("friday");
  for (let i = 0; i < fridays.length; i += 1) {
    let friday = fridays[i];
    friday.innerHTML = "Sextou!";
  }
  buttonFridayState = true;
}

function hideFridays() {
  const dezFridays = [4, 11, 18, 25];
  let fridays = document.getElementsByClassName("friday");
  for (let i = 0; i < fridays.length; i += 1) {
    let friday = fridays[i];
    friday.innerHTML = dezFridays[i];
  }
  buttonFridayState = false;
}

let buttonFridayState = false;

let buttonFriday = document.getElementById("btn-friday");
buttonFriday.addEventListener("click", function () {
  if (buttonFridayState) {
    hideFridays();
  } else {
    showFridays();
  }
});

// Requisito 6
function zoomEffect() {
  let days = document.getElementsByClassName("day");

  for (let i = 0; i < days.length; i += 1) {
    let day = days[i];
    day.addEventListener("mouseover", function (event) {
      event.target.style.fontSize = "25px";
    });
    day.addEventListener("mouseleave", function (event) {
      event.target.style.fontSize = "20px";
    });
  }
}

zoomEffect();

// Requisito 7
function addTask(tarefa) {
  let myTask = document.createElement("span");
  myTask.innerHTML = tarefa;
  document.querySelector(".my-tasks").appendChild(myTask);
}

addTask("Estudar");

// Requisito 8
function colorSubtitle(color) {
  let colorDiv = document.createElement('div');
  colorDiv.className = 'task';
  colorDiv.style.backgroundColor = color;
  document.querySelector('.my-tasks').appendChild(colorDiv); 
}

colorSubtitle('yellow');