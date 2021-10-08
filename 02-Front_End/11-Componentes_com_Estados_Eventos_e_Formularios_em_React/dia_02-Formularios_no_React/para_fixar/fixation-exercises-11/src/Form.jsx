import React, { Component } from 'react';
import EmailForm from './EmailForm';
import NomeForm from './NomeForm';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      sexo: '',
      sobre: '',
      termos: false,
      formularioComErros: '',   
    }
  }

  handleEvent = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleError = (error) => {
    console.log(error)
    this.setState({formularioComErros: error});
  }

  render() {
    return (
      <form>
        <fieldset>
        <legend>Formulário</legend>
          <NomeForm value={this.state.nome} handleError={this.handleError} handleEvent={this.handleEvent}/>
          <EmailForm value={this.state.email} handleEvent={this.handleEvent}/>
          <label>
            Sexo:
            <select name='sexo' onChange={this.handleEvent}>
              <option value='F'>Feminino</option>
              <option value='M'>Masculino</option>
              <option value='O'>Outro</option>
            </select>
          </label>
          <label>
            Sobre:
            <textarea name='sobre' onChange={this.handleEvent} />
          </label>
          <label>
            Arquivo:
            <input type='file' />
          </label>
        </fieldset>
        <label>
          Aceito os termos
          <input name='termos' type='checkbox' onChange={this.handleEvent} />
        </label>
      </form>
    );
  }
}

export default Form;
