enum actions {
  SALVAR = 1,
  IMPRIMIR,
  ABRIR,
  VISUALIZAR,
  FECHAR,
}

const abrir = actions.ABRIR;
console.log(abrir);
const salvar = actions[1];
console.log(salvar);