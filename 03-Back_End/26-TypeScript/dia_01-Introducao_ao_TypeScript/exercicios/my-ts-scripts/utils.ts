const readlineSync = require('readline-sync');

function convert(value: number, baseUnit: string, convertionUnit: string, units: string[]): number {
  const baseIndex = units.indexOf(baseUnit);
  const convertionIndex = units.indexOf(convertionUnit);
  const expoent = (convertionIndex - baseIndex);
  return value * (10 ** expoent);
}

export function exec(units: string[]): void {
  const value = readlineSync.questionFloat('Qual valor será convertido?');
  const baseUnit = readlineSync.question('A partir de qual unidade de medida o valor será convertido?');
  const convertionUnit = readlineSync.question('Para qual unidade de medida o valor será convertido?');
  const result = convert(value, baseUnit, convertionUnit, units);
  console.log(`${value}${baseUnit} é igual a ${result}${convertionUnit}`);
}