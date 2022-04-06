import Character from "./Character";

export default class MeleeCharacter extends Character {
  constructor(private name: string) {
    super();
  }

  talk(): void {
    console.log(`${this.name} está falando`);
  }

  specialMove(): void {
    console.log(`${this.name} fez o movimento especial`);
  }
}