import { Car, Color, Direction, Doors } from "./models/Car";

const carro = new Car('Volkswagen Gol', Color.PRATA, 4);
carro.turnOn()
carro.speedUp();
console.log('Depois de 600m')
carro.turn(Direction.ESQUERDA);
console.log('Em 200m na rotatória');
carro.turn(Direction.DIREITA);
carro.speedUp();
console.log('Depois de 1,2km');
carro.turn(Direction.DIREITA);
carro.speedUp();
carro.stop();

carro.openTheDoor(Doors.TRASEIRA_CARONA);
console.log('Passageiro entra no carro');
carro.closeTheDoor(Doors.TRASEIRA_CARONA);

carro.speedUp();
console.log('Depois de 300m');
carro.turn(Direction.DIREITA);
carro.speedUp();
console.log('Depois de 200m');
carro.turn(Direction.ESQUERDA);
carro.speedUp();
console.log('Depois de 400m');
carro.turn(Direction.DIREITA);
carro.speedUp();
console.log('Em 100m');
carro.stop();
carro.openTheDoor(Doors.TRASEIRA_CARONA);
console.log('Passageiro sai');
carro.closeTheDoor(Doors.TRASEIRA_CARONA);
carro.speedUp();