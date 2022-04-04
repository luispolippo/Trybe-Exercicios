class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size:number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  public turnOn() {
    console.log(`Marca: ${this._brand}`);
    console.log(`Tamanho: ${this._size} polegadas`);
    console.log(`Resolução: ${this._resolution}px`);
    console.log(`Conecções: ${this._connections}`);
  }

  get connectedTo(): string {
    if (this._connectedTo) {
      return this._connectedTo;
    }
    return 'Not connected';
  }

  set connectedTo(connection: string) {
    const connectionExits = this._connections.includes(connection);
    if (connectionExits) {
      this._connectedTo = connection;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const televisao = new Tv('LG', 48, '1080x720', ['HDMI', 'VGA', 'USB']);
televisao.turnOn();
televisao.connectedTo = 'HDMI';
console.log(televisao.connectedTo);