
const readline = require('readline-sync');

enum months {
  JANEIRO = 1,
  FEVEREIRO,
  MARÇO,
  ABRIL,
  MAIO,
  JUNHO,
  JULHO,
  AGOSTO,
  SETEMBRO,
  OUTUBRO,
  NOVEMBRO,
  DEZEMBRO,
}

enum seasons {
  OUTONO = 1, 
  INVERNO, 
  PRIMAVERA,
  VERAO, 
}

function getSeasonNorth(month: string) : number[] {
  switch (month) {
    case 'SETEMBRO': return [1, 4];
    case 'DEZEMBRO': return [1, 2];
    case 'MARÇO': return [2, 3];
    case 'JUNHO': return [3, 4];
    case 'JANEIRO':
    case 'FEVEREIRO': return [2];
    case 'ABRIL':
    case 'MAIO': return [3];
    case 'JULHO':
    case 'AGOSTO': return [4];
    case 'OUTUBRO':
    case 'NOVEMBRO': return [1];
  }
  return [0];
};

function getSeasonSouth(month: string): number[] {
  switch (month) {
    case 'SETEMBRO': return [2, 3];
    case 'DEZEMBRO': return [3, 4];
    case 'MARÇO': return [1, 4];
    case 'JUNHO': return [1, 2];
    case 'JANEIRO':
    case 'FEVEREIRO': return [4];
    case 'ABRIL':
    case 'MAIO': return [1];
    case 'JULHO':
    case 'AGOSTO': return [2];
    case 'OUTUBRO':
    case 'NOVEMBRO': return [3];
  }
  return [0];
};

function exec() : void {
  const month = readline.question('Digite o mês: ');
  const hemisphere = readline.question('Digite o hemisfério: ');
  const monthUpper = month.toUpperCase();
  const hemisphereUpper = hemisphere.toUpperCase();
  let seasonsNum: number[];
  if (hemisphereUpper === 'NORTE') {
    seasonsNum = getSeasonNorth(monthUpper);
  } else if (hemisphereUpper === 'SUL') {
    seasonsNum = getSeasonSouth(monthUpper);
  } else {
    seasonsNum = [];
    console.log('Hemisfério não encontrado');
  }
  seasonsNum.forEach((season) => {
    console.log(seasons[season]);
  })
}

exec();
