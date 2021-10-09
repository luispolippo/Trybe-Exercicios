import React from 'react';

const states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
]

class PersonalInfo extends React.Component {
  render() {

    const {handler, name, email, cpf, address, city, state} = this.props;

    return (
      <fieldset>
        <legend>Informações Pessoais</legend>
        <div>
          <label>
            Nome:
            <input type='text' name="name" onChange={handler} value={name.toUpperCase()}/>
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type='text' name="email" onChange={handler} value={email}/>
          </label>
        </div>
        <div>
          <label>
            CPF:
            <input type='text' name="cpf" onChange={handler} value={cpf}/>
          </label>
        </div>
        <div>
          <label>
            Endereço:
            <input type='text' name="address" onChange={handler} value={address}/>
          </label>
        </div>
        <div>
          <label>
            Cidade:
            <input type='text' name="city" onChange={handler} value={city}/>
          </label>
        </div>
        <div>
          <label>
            Estado:
            <select type='text' name="state" onChange={handler} value={state}>
              {
                states.map((state) => {
                  const key = Object.keys(state);
                  return <option key={key[0]} value={key[0]}>{state[key[0]]}</option>
                })
              }
            </select>
          </label>
        </div>
        <div>
          <label>
            Tipo de Endereço:
            <input type='radio' name="addressType" onChange={handler} value="house" />Casa
            <input type='radio' name="addressType" onChange={handler} value="apartment"/>Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalInfo;
