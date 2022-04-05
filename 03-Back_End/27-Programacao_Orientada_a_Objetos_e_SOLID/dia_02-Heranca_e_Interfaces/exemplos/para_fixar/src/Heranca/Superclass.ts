class Superclass {
  public isSuper = true;

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const main = (superclass: Superclass): void => {
  if (superclass.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sub!')
  }
  superclass.sayHello();
}

const obj1 = new Superclass();
const obj2 = new Subclass();

main(obj1);
main(obj2);

