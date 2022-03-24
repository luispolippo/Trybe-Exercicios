interface House {
  _size: number;
  _roomsNumber: number;
  _material: string;

  openDoor(): void;
  closeDoor(): void;
}

class House {
  constructor(size: number, roomsNumber: number, material: string) {
    this._size = size;
    this._roomsNumber = roomsNumber;
    this._material = material;
  }

  openDoor(): void {
    console.log('Door opened')
  }

  closeDoor(): void {
    console.log('Door closed')
  }
}