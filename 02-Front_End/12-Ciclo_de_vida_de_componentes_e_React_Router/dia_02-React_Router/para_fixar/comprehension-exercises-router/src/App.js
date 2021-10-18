import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users  greetingsMessage="Good Morning" {...props} />} />
          <Route path="/strict-access" render={(props) => <StrictAccess user={{username: 'joao', password: '1234'}} {...props} />} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
