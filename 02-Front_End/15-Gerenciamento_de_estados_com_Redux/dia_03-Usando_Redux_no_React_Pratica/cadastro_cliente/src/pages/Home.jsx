import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
        <div>
          <Link to="/clientform">
            <p>Cadastro de Cliente</p>
          </Link>
        </div>
      </>
    )
  }
}
