let header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(47, 193, 140)";

let headerText = document.getElementsByTagName("h1")[0];
headerText.style.color = "white";

let emergencyTitles = document.querySelectorAll(".emergency-tasks h3");

for (let i = 0; i < emergencyTitles.length; i += 1) {
  emergencyTitles[i].
  style.color = "white";
  emergencyTitles[i].style.backgroundColor = 'rgb(174, 43, 212)';
}


let emergencySection = document.getElementsByClassName('emergency-tasks')[0];
emergencySection.style.backgroundColor = 'rgb(218, 131, 108)'




let noEmergencyTitles = document.querySelectorAll(".no-emergency-tasks h3");

for (let i = 0; i < noEmergencyTitles.length; i += 1) {
  noEmergencyTitles[i].
  style.color = "white";
  noEmergencyTitles[i].style.backgroundColor = 'black';
}

let noEmergencySection = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencySection.style.backgroundColor = 'rgb(229, 228, 52)'

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(3, 107, 82)';

let footerDiv = document.querySelector('#footer-container div');
footerDiv.style.color = 'white';