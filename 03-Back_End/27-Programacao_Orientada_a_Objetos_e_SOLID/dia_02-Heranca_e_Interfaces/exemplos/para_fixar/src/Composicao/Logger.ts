interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log(`Log1: ${param}`);
  }
}

class ConsoleLogger2 implements Logger {
  public log(param: string): void {
    console.log(`Log2: ${param}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  
  public save(key: string, value: string): void {
    this.logger.log(key)
    this.logger.log(value);
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(log1);
const db2 = new ExampleDatabase(log2);
const db3 = new ExampleDatabase();

db1.save('chave', 'valor');
db2.save('db', '2');
db3.save('db3', 'sem especificar logger');