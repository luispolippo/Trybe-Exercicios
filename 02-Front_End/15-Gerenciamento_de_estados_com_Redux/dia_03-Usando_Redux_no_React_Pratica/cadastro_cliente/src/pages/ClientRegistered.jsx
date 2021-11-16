import React, { Component } from 'react'
import { connect } from 'react-redux';

class ClientRegistered extends Component {
  constructor() {
    super();
    this.state ={
      isLogged: false,
    }
  }

  componentDidMount() {
    const { email, password } = this.props
    if (email !== '' && password !== '') {
      this.setState({isLogged: true})
    }
  }

  render() {
    const { isLogged } = this.state;
    const { loginData: { email }, clientData} = this.props;
    const { name, age } = clientData;
    return (
      <div>
      {
        isLogged ? (
          <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{email}</h3>
          </div>
          ) : (
          <h1>Login não efetuado</h1>
          )
      }
      </div>    
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.loginReducer,
  clientData: state.registerReducer,
})

export default connect(mapStateToProps, null)(ClientRegistered);
