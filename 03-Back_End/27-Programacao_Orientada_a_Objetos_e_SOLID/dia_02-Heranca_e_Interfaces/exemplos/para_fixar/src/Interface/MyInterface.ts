interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string; 
}

class Myclass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `Soma: ${sum}`;
  }
}

const obj3 = new Myclass(10);
console.log(obj3.myFunc(5));
