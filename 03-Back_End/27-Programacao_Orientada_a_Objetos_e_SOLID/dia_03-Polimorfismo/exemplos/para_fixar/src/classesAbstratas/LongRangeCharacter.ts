import Character from "./Character";

export default class LongRangeCharacter extends Character {
  constructor(private name: string) {
    super();
  }

  public talk(): void {
    console.log(`${this.name} está falando`)
  }

  public specialMove(): void {
    console.log(`${this.name} fez o movimento especial`);
  }
}