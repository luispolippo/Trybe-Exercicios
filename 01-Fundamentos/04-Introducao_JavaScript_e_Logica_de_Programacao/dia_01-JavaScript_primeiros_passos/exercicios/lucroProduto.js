let custoProduto = 50;
let precoVenda = 80;
let result;

if (custoProduto < 0 || precoVenda < 0) {
  result = "Erro! Valores incorretos";
} else {
  let custoTotal = custoProduto + custoProduto * 0.2;

  let lucro = precoVenda - custoTotal;

  result = lucro;
}

console.log(result);
