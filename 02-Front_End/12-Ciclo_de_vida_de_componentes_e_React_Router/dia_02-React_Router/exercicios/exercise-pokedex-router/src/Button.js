import React, { Component } from 'react';

class Button extends Component {
  render(){
    const { type, onClick } = this.props
    return (
      <button className="btnType" onClick={onClick}>{type}</button>
    );
  }
}

export default Button;