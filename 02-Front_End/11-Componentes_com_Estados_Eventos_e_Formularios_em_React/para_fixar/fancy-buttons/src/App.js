import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.showMeu = this.showMeu.bind(this);
    this.showOla = this.showOla.bind(this);
    this.showQuerido = this.showQuerido.bind(this);
  }

  showOla() {
    console.log(this);
    console.log('Olá');
  }

  showMeu() {
    console.log(this);
    console.log('meu');
  }

  showQuerido() {
    console.log(this);
    console.log('querido');
  }

  render() {
    return (
      <div>
        <button onClick={this.showOla}>Olá</button>
        <button onClick={this.showMeu}>meu</button>
        <button onClick={this.showQuerido}>querido</button>
      </div>
    );
  }
}

export default App;
