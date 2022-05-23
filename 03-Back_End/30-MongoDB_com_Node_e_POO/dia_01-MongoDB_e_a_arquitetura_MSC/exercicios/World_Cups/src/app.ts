import express from 'express';
import connection from './models/connection';
import routes from './routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    connection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
  }
}

export default App;
