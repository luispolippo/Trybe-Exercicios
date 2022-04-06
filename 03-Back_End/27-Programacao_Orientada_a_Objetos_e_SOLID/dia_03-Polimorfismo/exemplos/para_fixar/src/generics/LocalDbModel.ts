import { DbCharacter, Character } from "./estrutura";
import IModel from "./IModel";

export default class LocalDbModel implements IModel {
  list(): DbCharacter[] {
    throw new Error("Finge que é um list()");
  }
  create(character: Character): DbCharacter {
    throw new Error("Finge que é um create()");
  }
  update(character: DbCharacter): DbCharacter {
    throw new Error("Finge que é um update()");
  }
  delete(character: DbCharacter): void {
    throw new Error("Finge que é um delete");
  } 
}