import IModel from "./IModel";

export default class CharacterService {
  constructor(private _localDb: IModel) {}

  list() {
    this._localDb.list()
  }

  create() {
    //this._localDb.create();
  }

  update() {
    //this._localDb.update();
  }

  delete() {
    //this._localDb.delete();
  }
}