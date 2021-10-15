import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, cpf, address, city, state, addressType } = this.state;

    return (
      <form>
        <PersonalInfo
          handler={this.handleChange}
          name={name}
          email={email}
          cpf={cpf}
          address={address}
          city={city}
          state={state}
          adressType={addressType}
        />
        <ProfessionalInfo />
      </form>
    );
  }
}

export default Form;
