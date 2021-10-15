import React, { Component } from 'react';

class NomeForm extends Component {
  render() {

    const { value, handleEvent, handleError } = this.props
    let error = false;
    const regex = /[\d]/gm
    if (value.length > 50 || regex.test(value)) error = true;
    /* handleError(error) */
    return (
      <label>
        Nome:
        <input type='text' value={value} name='nome' onChange={handleEvent} />
      </label>
    );
  }
}

export default NomeForm;