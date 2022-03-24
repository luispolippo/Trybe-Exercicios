export enum Color {
  PRETA = 'preta',
  BRANCA = 'branca',
  VERMELHA = 'Vermelha',
  PRATA = 'Prata'
}

export enum Doors {
  DIANTEIRA_MOTORISTA = 'Dianteira do motorista',
  DIANTEIRA_CARONA = 'Dianteira do carona',
  TRASEIRA_MOTORISTA = 'Trasiera do motorista',
  TRASEIRA_CARONA = 'Traseira do carona',
}

export enum Direction {
  ESQUERDA = 'Esquerda',
  DIREITA = 'Direita',
}

export class Car {
  brand: string
  color: Color
  doors: number

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() : void {
    console.log('Buzina');
  }

  openTheDoor(door: Doors): void {
    console.log(`Aberta porta ${Doors[door]}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechada porta ${Doors[door]}`);
  }

  turnOn(): void {
    console.log('Carro ligado');
  }

  turnOff(): void {
    console.log('Carro desligado');
  }

  speedUp(): void {
    console.log('Acelerando')
  }

  speedDown(): void {
    console.log('Freiando')
  }

  stop() : void {
    console.log('Carro parado')
  }

  turn(direction: Direction) : void {
    console.log(`Virando para ${direction}`)
  }
}