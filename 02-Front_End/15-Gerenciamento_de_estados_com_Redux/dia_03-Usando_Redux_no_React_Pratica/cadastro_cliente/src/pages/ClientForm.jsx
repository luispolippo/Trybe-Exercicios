import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveClientAction } from '../redux/actions';
import { Link } from 'react-router-dom';

class ClientForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleOnChange = ({target}) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { send } = this.props
    return (
      <>
      <div>
        <input onChange={this.handleOnChange} name="name" type="text" placeholder="Nome"/>
        <input onChange={this.handleOnChange} name="age" type="text" placeholder="Idade"/>
        <input onChange={this.handleOnChange} name="email" type="text" placeholder="Email"/>
        <button onClick={ () => send(this.state)} type="button">Cadastrar</button>
      </div>
      <div>
        <Link to="/clientRegistered">
          <p>Clientes Cadastrados</p>
        </Link>
      </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  send: (state) => dispatch(saveClientAction(state))
})

export default connect(null, mapDispatchToProps)(ClientForm);
