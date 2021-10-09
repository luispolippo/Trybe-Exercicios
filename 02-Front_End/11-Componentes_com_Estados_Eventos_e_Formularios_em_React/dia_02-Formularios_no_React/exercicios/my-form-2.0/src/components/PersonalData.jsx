import React from 'react';

class PersonalData extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <label>
          Nome:
          <input type='text' />
        </label>
        <label>
          Email:
          <input type="text"/>
        </label>
        <label>
          CPF:
          <input type="text"/>
        </label>
        <label>
          Endereço:
          <input type="text"/>
        </label>
        <label>
          Cidade:
          <input type="text"/>
        </label>
        <label>
          Estado:
          <select>
            <option>Todos os estados do Brasil</option>
          </select>
        </label>
        <label>
          Tipo:
          <input type="radio" name="residencia" />Casa
          <input type="radio" name="residencia" />Apartamento
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;
