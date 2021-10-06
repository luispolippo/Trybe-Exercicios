import './App.css';
import { Component } from 'react';

function showOla() {
  console.log('Olá');
}

function showMeu() {
  console.log('meu');
}

function showQuerido() {
  console.log('querido');
}

class App extends Component {
  render() {
    return <div>
      <button onClick={showOla}>Olá</button>
      <button onClick={showMeu}>meu</button>
      <button onClick={showQuerido}>querido</button>
    </div>;
  }
}

export default App;
