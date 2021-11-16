import React, { Component } from 'react'
import { connect } from 'react-redux';
import { saveLoginAction } from '../redux/actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleOnChange = ({target}) => {
    const { value, name } = target;
    this.setState({ [name]: value })
  }

  render() {
    const { send } = this.props
    return (
      <div>
        <input type="text" name="email" onChange={this.handleOnChange} placeholder="Email"/>
        <input type="text" name="password" onChange={this.handleOnChange} placeholder="Senha"/>
        <Link to="/clientregistered">
          <button type="button" onClick={() => send(this.state)}>Entrar</button>
        </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  send: (state) => dispatch(saveLoginAction(state))
})

export default connect(null, mapDispatchToProps)(Login);
