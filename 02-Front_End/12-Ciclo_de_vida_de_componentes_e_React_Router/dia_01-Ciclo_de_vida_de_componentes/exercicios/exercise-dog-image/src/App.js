import { Component } from 'react';
import Dog from './components/Dog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogImage: '',
      loading: true,
    };
  }

  fetchApi = async () => {
    this.changeLoadingToTrue();
    const result = await fetch('https://dog.ceo/api/breeds/image/random');
    const dataJson = await result.json();
    const dogImage = dataJson.message;
    this.setState({ dogImage })
    this.changeLoadingToFalse();
  }

  async componentDidMount() {
    await this.fetchApi();
  }

  changeLoadingToTrue = () => {
    this.setState({ loading: true });
  }

  changeLoadingToFalse = () => {
    this.setState({ loading: false });
  }

  handleOnClick = () => {
    this.fetchApi();
  }

  render() {
    const { dogImage, loading } = this.state;
    return (
      <div>
        {
        loading ? <p>...Loading...</p> : 
          <Dog dogImage={dogImage} />
        }  
        <button onClick={this.handleOnClick}>Nova Imagem</button>
      </div>  
    );
    
    
  }
}

export default App;
