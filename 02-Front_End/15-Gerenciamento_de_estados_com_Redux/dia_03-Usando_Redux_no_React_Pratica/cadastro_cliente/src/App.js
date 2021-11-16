import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientRegistered from './pages/ClientRegistered';
import ClientForm from './pages/ClientForm';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/clientregistered" component={ClientRegistered} />
            <Route path="/clientform" component={ClientForm} />
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App;
