import { Component } from 'react';
import './App.css';
import User from './components/User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loading: true,
    };
  }

  fetchApi = async () => {
    this.changeLoadingTrue();
    const response = await fetch('https://api.randomuser.me/');
    const dataJson = await response.json();
    this.setState({ user: dataJson.results[0] });
    console.log(dataJson.results);
  };

  async componentDidMount() {
    await this.fetchApi();
    this.changeLoadingFalse();
  }

  changeLoadingTrue = () => {
    this.setState({ loading: true })
  }

  changeLoadingFalse = () => {
    this.setState({ loading: false }) 
  }

  render() {
    const {
      user: { name, email, dob, picture },
      loading,
    } = this.state;
    const loadingElement = <span>...loading</span>
    return (
      loading ? loadingElement : dob.age > 50 ? <p>Usuário com idade maior que 50</p> :
        <User 
          userName={name} 
          userEmail={email} 
          userAge={dob}
          userImage={picture}
        />
    );
  }
}

export default App;
