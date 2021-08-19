const button = document.getElementById('submitButton');
const estados = {
  ac: "Acre",
  al: "Alagoas",
  ap: "Amapá",
  am: "Amazonas",
  ba: "Bahia",
  ce: "Ceará",
  df: "Distrito Federal",
  es: "Espirito Santo",
  go: "Goiás",
  ma: "Maranhão",
  mt: "Mato Grosso",
  ms: "Mato Grosso do Sul",
  mg: "Minas Gerais",
  pa: "Pará",
  pb: "Paraíba",
  pr: "Paraná",
  pe: "Pernambuco",
  pi: "Piauí",
  rj: "Rio de Janeiro",
  rn: "Rio Grande do Norte",
  rs: "Rio Grande do Sul",
  ro: "Rondônia",
  rr: "Roraima",
  sc: "Santa Catarina",
  sp: "São Paulo",
  se: "Sergipe",
  to: "Tocantins",
};
function createOptionStates() {
  const select = document.getElementById('input-estado');
  for (let key in estados) {
    const option = document.createElement('option');
    option.value = key;
    option.innerHTML = estados[key];
    select.appendChild(option);
  }
}

function formValidating(event) {
  event.preventDefault();
  
}

function buttonListener() {
  button.addEventListener('click', formValidating);
}

buttonListener();
createOptionStates();
