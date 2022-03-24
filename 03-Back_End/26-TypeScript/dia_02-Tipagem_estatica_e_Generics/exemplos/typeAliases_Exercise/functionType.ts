type twoValues = {
  x: number;
  y: number;
}

function sumValues(values: twoValues): number {
  return values.x + values.y;
}

console.log(sumValues({x: 10, y:5}))