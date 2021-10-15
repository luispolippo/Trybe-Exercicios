import React from 'react';

class ProfessionalInfo extends React.Component {
  render() {
    return(
      <fieldset>
        <legend>Dados Profissionais</legend>
        <div>
          <label>
            Resumo do Currículo:
            <textarea />
          </label>
        </div>
        <div>
          <label>
            Cargo:
            <input />
          </label>
        </div>
        <div>
          <label>
            Descrição do cargo:
            <textarea />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default ProfessionalInfo