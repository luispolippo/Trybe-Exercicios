const button = document.getElementById("submitButton");
const cleanButton = document.getElementById("cleanButton");
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
  const select = document.getElementById("input-estado");
  for (let key in estados) {
    const option = document.createElement("option");
    option.value = key;
    option.innerHTML = estados[key];
    select.appendChild(option);
  }
}

function buttonReset(event) {
  event.preventDefault();
}

function validateDate() {
  let date = document.getElementById("input-data").value;
  let day = parseInt(date.substring(0, 2)) || "";
  let month = parseInt(date.substring(3, 5)) || "";
  let year = parseInt(date.substring(6, 10)) || "";

  if (
    typeof day !== "number" ||
    typeof month !== "number" ||
    typeof year !== "number"
  ) {
    alert(
      "Data deve ser no formato dd/mm/aaaa e possuir somente números entre as barras"
    );
  }

  if (day < 1 || day > 31) {
    alert("Dia deve ser válido");
  }

  if (month < 1 || month > 12) {
    alert("Mês deve ser válido");
  }

  if (year < 0) {
    alert("Ano deve ser válido");
  }
}

function showMessage(message) {
  let div = document.getElementById("dados");
  for (let i = 0; i < message.length; i += 1) {
    let p = document.createElement("p");
    p.innerHTML = message[i];
    div.appendChild(p);
  }
}

function showResult(inputs) {
  let div = document.getElementById("dados");
  for (let i = 0; i < inputs.length; i += 1) {
    let p = document.createElement("p");
    p.innerHTML = inputs[i];
    div.appendChild(p);
  }
}

function validateForm() {
  let inputNome = document.getElementById("input-nome").value;
  let inputEmail = document.getElementById("input-email").value;
  let inputCpf = document.getElementById("input-cpf").value;
  let inputEndereco = document.getElementById("input-endereco").value;
  let inputCidade = document.getElementById("input-cidade").value;
  let inputResumo = document.getElementById("input-resumo").value;
  let inputCargo = document.getElementById("input-cargo").value;
  let inputDescricao = document.getElementById("input-cidade").value;
  let inputEstado = document.getElementById("input-estado").value;
  let inputData = document.getElementById("input-data").value;
  let mensagem = [];

  if (inputNome === "") {
    mensagem.push("Campo nome vazio!");
  }
  if (inputNome.length > 40) {
    mensagem.push("Nome maior que 40 caracteres");
  }
  if (inputEmail === "") {
    mensagem.push("Campo email vazio!");
  }
  if (inputEmail.length > 50) {
    mensagem.push("Email maior que 50 caracteres");
  }
  if (inputCpf === "") {
    mensagem.push("CPF vazio!");
  }
  if (inputCpf.length > 11) {
    mensagem.push("Campo CPF maior que 11 caracteres");
  }
  if (inputEndereco === "") {
    mensagem.push("Endereco Vazio!");
  }
  if (inputEndereco.length > 200) {
    mensagem.push("Campo endereco maior que 200 caracteres");
  }
  if (inputCidade === "") {
    mensagem.push("Cidade vazio!");
  }
  if (inputCidade.length > 28) {
    mensagem.push("Campo cidade maior que 28 caracteres");
  }
  if (inputResumo === "") {
    mensagem.push("Resumo vazio!");
  }
  if (inputResumo > 1000) {
    mensagem.push("Campo resumo maior que 1000 caracteres");
  }
  if (inputCargo === "") {
    mensagem.push("Cargo vazio!");
  }
  if (inputCargo.length > 40) {
    mensagem.push("Campo cargo maior que 40 caracteres");
  }
  if (inputDescricao === "") {
    mensagem.push("Descricao Vazia!");
  }
  if (inputDescricao > 500) {
    mensagem.push("Campo descricao maior que 500 caracteres");
  }

  let inputs = [
    inputNome,
    inputEmail,
    inputCpf,
    inputEndereco,
    inputCidade,
    inputEstado,
    inputResumo,
    inputCargo,
    inputDescricao,
    inputData,
  ];

  if (mensagem.length !== 0) {
    showMessage(mensagem);
  } else {
    showResult(inputs);
  }
}

function buttonListener() {
  button.addEventListener("click", function () {
    buttonReset(event);
    validateDate();
    validateForm();
  });

  cleanButton.addEventListener("click", function () {
    let divChilds = document.getElementById("dados").children;
    if (divChilds) {
      for (let i = divChilds.length - 1; i > 0; i -= 1) {
        let child = divChilds[i];
        child.parentElement.remove(child);
      }
    }
  });
}

buttonListener();
createOptionStates();
