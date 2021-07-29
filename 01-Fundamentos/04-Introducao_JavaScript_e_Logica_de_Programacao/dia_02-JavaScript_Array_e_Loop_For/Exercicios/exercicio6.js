let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contador = 0;

for (number of numbers) {
  if (number % 2 != 0) {
    contador += 1;
  }
}

if (contador == 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("Valores ímpares: " + contador);
}
