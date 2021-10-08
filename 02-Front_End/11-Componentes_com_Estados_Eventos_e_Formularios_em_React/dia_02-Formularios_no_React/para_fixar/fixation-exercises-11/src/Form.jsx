import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
    }

  }

  handleChange = (event) => {
    this.setState({ nome: event.target.value })
  }

  render(){
    return (
      <form>
        <label>
          Nome:
          <input type="text" onChange={this.handleChange}/>
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Sexo:
          <select>
            <option value="F">Feminino</option>
            <option value="M">Masculino</option>
            <option value="O">Outro</option>
          </select>
        </label>
        <label>
          Sobre:
          <textarea />
        </label>
      </form>
    );
  }
}

export default Form;