let n = 7;
let count = 0;

for (let index = 0; index <= n; index += 1) {
  if (n % index === 0) {
    count += 1;
    if (count > 2) {
      break;
    }
  }
}

if (count === 2) {
  console.log("Número Primo");
} else {
  console.log("Número não é primo");
}
