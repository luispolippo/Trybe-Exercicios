import { Component } from 'react';
import './Dog.css';

class Dog extends Component {

  render() {
    const { dogImage } = this.props;
    return (
      <div>
        <img src={dogImage} alt="imagem cachorro"/>
      </div>
    );
  }
}

export default Dog;