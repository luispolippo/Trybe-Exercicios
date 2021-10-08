import React, { Component } from 'react';

class Form extends Component {
  /* constructor(props) {
    super(props);

    /* this.state = {
      
    } */
  

  handleEvent = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <fieldset>
        <legend>Formulário</legend>
          <label>
            Nome:
            <input type='text' name='nome' onChange={this.handleEvent} />
          </label>
          <label>
            Email:
            <input type='email' name='email' onChange={this.handleEvent} />
          </label>
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
