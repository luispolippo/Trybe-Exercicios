import React from 'react';

class InputEmail extends React.Component {
  render() {

    const { type, label, value, name, handler } = this.props;

    let error = undefined;
    if (value.length === 0) error = 'Campo Obrigatório'
    if (value.length > 50) error = 'Máximo de 50 caracteres'

    return (
      <div>
        <label>
          {label}
          <input
            type={type}
            name={name}
            value={value}
            onChange={handler}
          />
        </label>
        <span>{error}</span>
      </div>
    );
  }
}

export default InputEmail;
