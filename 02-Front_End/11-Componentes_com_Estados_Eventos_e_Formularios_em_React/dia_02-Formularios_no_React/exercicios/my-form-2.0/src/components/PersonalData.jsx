import React from 'react';
import InputNome from './formComponents/InputNome';

class PersonalData extends React.Component {

  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      residencia: '',
    }
  }

  handler = ({ target }) => {
    const name = target.name;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  render() {

    const { nome, email, cpf, endereco, cidade, estado, residencia } = this.state;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>
          <InputNome type="text" label="Nome:" name="nome" handler={this.handler} value={nome}/>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={this.handler}/>
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" />
        </label>
        <label>
          Endereço:
          <input type="text" name="endereco"/>
        </label>
        <label>
          Cidade:
          <input type="text" name="cidade"/>
        </label>
        <label>
          Estado:
          <select name="estado">
            <option value='estadosBrasil'>Todos os estados do Brasil</option>
          </select>
        </label>
        <label>
          Residência:
          <input type="radio" name="residencia" />Casa
          <input type="radio" name="residencia" />Apartamento
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;
