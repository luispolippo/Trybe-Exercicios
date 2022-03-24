"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readlineSync = require('readline-sync');
function convert(value, baseUnit, convertionUnit, units) {
    const baseIndex = units.indexOf(baseUnit);
    const convertionIndex = units.indexOf(convertionUnit);
    const expoent = (convertionIndex - baseIndex);
    return value * (10 ** expoent);
}
function exec(units) {
    const value = readlineSync.questionFloat('Qual valor será convertido?');
    const baseUnit = readlineSync.question('A partir de qual unidade de medida o valor será convertido?');
    const convertionUnit = readlineSync.question('Para qual unidade de medida o valor será convertido?');
    const result = convert(value, baseUnit, convertionUnit, units);
    console.log(`${value}${baseUnit} é igual a ${result}${convertionUnit}`);
}
exports.exec = exec;
//# sourceMappingURL=utils.js.map