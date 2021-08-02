const custoProduto = 50;
const precoVenda = 80;

function lucroProduto(custoProduto, precoVenda){
  if (custoProduto < 0 || precoVenda < 0) {
    result = "Erro! Valores incorretos";
  } else {
    let custoTotal = custoProduto + custoProduto * 0.2;
  
    let lucro = precoVenda - custoTotal;
  
    return lucro;
  }
}



console.log(lucroProduto(custoProduto, precoVenda));
