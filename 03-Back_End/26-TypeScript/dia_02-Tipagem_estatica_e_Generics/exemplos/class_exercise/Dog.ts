interface Dog {
  _name: string;
  _age: number;
  _breed: string;

  bark(): void;
  eat(): void;
}

class Dog {
  constructor(name: string, age: number, breed: string) {
    this._name = name;
    this._age = age;
    this._breed = breed;
  }

  bark(): void {
    console.log(`${this._name} is barking`)
  };

  eat(): void {
    console.log(`${this._name} is eating`);
  }
}