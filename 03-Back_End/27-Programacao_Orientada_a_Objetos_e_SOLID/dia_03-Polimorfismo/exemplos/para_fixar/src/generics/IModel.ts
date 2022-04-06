import { DbCharacter, Character } from "./estrutura";

export default interface IModel {
  list(): DbCharacter[],
  create(character: Character): DbCharacter,
  update(character: DbCharacter): DbCharacter,
  delete(character: DbCharacter): void,
}