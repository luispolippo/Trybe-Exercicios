import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.showButton1 = this.showButton1.bind(this);
    this.showButton2 = this.showButton2.bind(this);
    this.showButton3 = this.showButton3.bind(this);
    this.state = {
      numeroCliquesBtn1: 0,
      numeroCliquesBtn2: 0,
      numeroCliquesBtn3: 0,
    };
  }

  showButton1() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliquesBtn1: estadoAnterior.numeroCliquesBtn1 + 1,
    }));
  }

  showButton2() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliquesBtn2: estadoAnterior.numeroCliquesBtn2 + 1,
    }));
  }

  showButton3() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliquesBtn3: estadoAnterior.numeroCliquesBtn3 + 1,
    }));
  }

  setButtonColor(btnNum) {
    return btnNum % 2 === 0 ? 'green' : 'light-gray';
  }

  render() {
    const { numeroCliquesBtn1, numeroCliquesBtn2, numeroCliquesBtn3 } =
      this.state;
    return (
      <div>
        <button
          onClick={this.showButton1}
          style={{backgroundColor: this.setButtonColor(numeroCliquesBtn1)}}
        >
          {numeroCliquesBtn1}
        </button>
        <button
          onClick={this.showButton2}
          style={{ backgroundColor: this.setButtonColor(numeroCliquesBtn2) }}
        >
          {numeroCliquesBtn2}
        </button>
        <button
          onClick={this.showButton3}
          style={{ backgroundColor: this.setButtonColor(numeroCliquesBtn3) }}
        >
          {numeroCliquesBtn3}
        </button>
      </div>
    );
  }
}

export default App;
