import React, { Component } from 'react';

class EmailForm extends Component {
  render() {
    const { value, handleEvent } = this.props;
    let error = undefined;
    if (value.length >= 30) error = 'Email muito longo';
    return (
      <label>
        Email:
        <input type='email' value={value} name='email' onChange={handleEvent} />
        <span>{error}</span>
      </label>
    );
  }
}

export default EmailForm;
