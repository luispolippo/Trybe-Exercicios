let piece = "RaiNha";
let result;
let pieceLower = piece.toLowerCase();

switch (pieceLower) {
  case "rei":
    result = "Uma casa para qualquer direção";
    break;
  case "rainha":
    result =
      "Move-se ao longo da horizontal, vertical e diagonais, em linha reta, mas não pode pular outras peças.";
    break;
  case "bispo":
    result = "diagonal mas não pode pular outras peças";
    break;
  case "cavalo":
    result = "move-se em forma de L e pode pular outras peças";
    break;
  case "torre":
    result = "vertical ou horizontal";
    break;
  case "peão":
    result =
      "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";
    break;
  default:
    result = "Erro! Peça inválida";
}

console.log(result);
