import { Component } from 'react';
import Dog from './components/Dog';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogImage: '',
      dogName: '',
      dogsList: [],
      loading: true,
    };
  }

  handleChange = ({ target }) => {
    const {value} = target;
    this.setState({ dogName: value });
  }

  fetchApi = async () => {
    this.changeLoadingToTrue();
    const result = await fetch('https://dog.ceo/api/breeds/image/random');
    const dataJson = await result.json();
    const dogImage = dataJson.message;
    this.setState({ dogImage, dogName: '' })
    this.changeLoadingToFalse();
  }

  async componentDidMount() {
    if ('dogName' in localStorage) {
      this.setState({
        dogImage: localStorage.dogImage,
        dogName: localStorage.dogName,
        loading: false,
      })
    } else {
      console.log('ali')
      await this.fetchApi();
    }
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

  handleOnSaveClick = () => {
    const { dogImage, dogName } = this.state;
    const dogObj = {
      dogName, 
      dogImage,
    }
    this.setState((prevState) => (
      {
        dogsList: [...prevState.dogsList, dogObj]
      }
    ), 
    () => {
      localStorage.dogName = dogObj.dogName;
      localStorage.dogImage = dogObj.dogImage;
    });
  }

  shouldComponentUpdate() {
    if (this.state.dogImage.includes('terrier')) return false;
    return true;
  };

  componentDidUpdate(_prevProps, prevState) {
    const { dogImage } = this.state;
    const prevDogImage = prevState.dogImage;
    /* localStorage.dogUrl = dogImage; */
    if(dogImage.length !== 0 && prevDogImage !== dogImage) {
      /* alert(dogImage.split('/')[4]); */
    }
  }

  render() {
    const { dogImage, loading, dogName } = this.state;
    return (
      <div>
        {
        loading ? <p>...Loading</p> : 
          <Dog dogImage={dogImage} />
        }  
        <input onChange={this.handleChange} value={dogName} type="text" placeholder="De nome ao doguinho" />
        <button onClick={this.handleOnSaveClick} >Salvar</button>
        <div>
          <button onClick={this.handleOnClick}>Nova Imagem</button>
        </div>
      </div>  
    );
    
    
  }
}

export default App;
