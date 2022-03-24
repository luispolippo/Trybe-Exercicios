var actions;
(function (actions) {
    actions[actions["SALVAR"] = 1] = "SALVAR";
    actions[actions["IMPRIMIR"] = 2] = "IMPRIMIR";
    actions[actions["ABRIR"] = 3] = "ABRIR";
    actions[actions["VISUALIZAR"] = 4] = "VISUALIZAR";
    actions[actions["FECHAR"] = 5] = "FECHAR";
})(actions || (actions = {}));
var abrir = actions.ABRIR;
console.log(abrir);
var salvar = actions[1];
console.log(salvar);
