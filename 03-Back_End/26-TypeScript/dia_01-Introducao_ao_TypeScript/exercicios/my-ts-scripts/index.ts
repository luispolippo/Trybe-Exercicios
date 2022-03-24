const readlineSync = require('readline-sync');

const scripts = ['Area', 'Capacidade', 'Distancia', 'Massa', 'Volume'];
const index = readlineSync.keyInSelect(scripts, 'Qual função será executada?');

console.log(`Executando função ${scripts[index]}`);

switch (index) {
  case 0: {
    require('./area');
    break;
  }
  case 1: {
    require('./capacity');
    break;
  }
  case 2: {
    require('./length');
    break;
  }
  case 3: {
    require('./mass');
    break;
  }
  case 4: {
    require('./volume');
    break;
  }
  default: {
    console.log('Opção indisponível');
  }
}