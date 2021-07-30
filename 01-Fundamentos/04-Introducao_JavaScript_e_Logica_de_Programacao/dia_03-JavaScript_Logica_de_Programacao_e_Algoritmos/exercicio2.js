let n = 5;

for (let index = 1; index <= n; index += 1) {
  let asteriscos = "";
  for (let index2 = 1; index2 <= index; index2 += 1) {
    asteriscos += "*";
  }
  console.log(asteriscos);
}

