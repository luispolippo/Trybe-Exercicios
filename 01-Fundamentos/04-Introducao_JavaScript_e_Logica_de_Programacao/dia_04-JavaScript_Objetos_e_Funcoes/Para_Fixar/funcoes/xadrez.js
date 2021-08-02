let piece = "RaiNha";

function chessMove(piece) {
  switch (piece.toLowerCase()) {
    case "rei":
      return "Uma casa para qualquer direção";
      break;
    case "rainha":
      return "Move-se ao longo da horizontal, vertical e diagonais, em linha reta, mas não pode pular outras peças.";
      break;
    case "bispo":
      return "diagonal mas não pode pular outras peças";
      break;
    case "cavalo":
      return "move-se em forma de L e pode pular outras peças";
      break;
    case "torre":
      return "vertical ou horizontal";
      break;
    case "peão":
      return "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";
      break;
    default:
      return "Erro! Peça inválida";
  }
}

console.log(piece + " : " + chessMove(piece));
