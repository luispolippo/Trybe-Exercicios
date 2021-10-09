import React from 'react';

class InputNome extends React.Component {

  render() {
    
    const { label, type, name, handler, value } = this.props;
    
    let error = undefined;
    if (value.length === 0) error = 'Campo Obrigatório'
    if (value.length > 40) error = 'Máximo de 40 caracteres'

    return (
      <div>
        <label>
          {label}
          <input type={type} name={name} value={value.toUpperCase()} onChange={handler} />
        </label>
        <span>{error}</span>
      </div>
    );
  }
}

export default InputNome;
