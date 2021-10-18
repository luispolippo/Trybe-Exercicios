import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {

  wrongCredencials = () => {
    alert('Acess Denied');
    return <Redirect to="/" />
  }

  render() {
    const { user: {username, password} } = this.props;
    return (
      <div>
        {
          (username === 'joao' && password === '1234') ? 
            <p>Welcome joao!</p> : this.wrongCredencials()
        }      
      </div> 
    )
  }
}

export default StrictAccess;