import React from 'react';

class LastJobData extends React.Component {
  render() {
    return(
      <fieldset>
        <legend>Dados do último emprego</legend>
        <label>
          Resumo do currículo:
          <textarea />
        </label>
        <label>
          Cargo:
          <textarea />
        </label>
        <label>
          Descrição do cargo:
          <input type="text"/>
        </label>
      </fieldset>
    );
  }
}

export default LastJobData