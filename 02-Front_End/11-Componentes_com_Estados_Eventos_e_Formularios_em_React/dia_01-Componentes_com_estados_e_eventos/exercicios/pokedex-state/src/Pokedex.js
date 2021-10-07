import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.nextBtn = this.nextBtn.bind(this);
    this.previousBtn = this.previousBtn.bind(this);
    this.filter = this.filter.bind(this);
    this.btnFire = this.btnFire.bind(this);
    this.btnPsychic = this.btnPsychic.bind(this);

    this.state = {
      currPokemon: 0,
      pokemonType: 'all',
    };
  }

  nextBtn(length) {
    console.log(length)
    this.setState((prevState) => {
      if (prevState.currPokemon === length -1) {
        return { currPokemon: 0 };
      }
      return { currPokemon: prevState.currPokemon + 1 };
    });
  }

  previousBtn(length) {
    this.setState((prevState) => {
      if (prevState.currPokemon === 0) {
        return { currPokemon: length -1};
      }
      return { currPokemon: prevState.currPokemon - 1 };
    });
  }

  filter() {
    return this.props.pokemons.filter((pokemon) => {
      if (this.state.pokemonType === 'all') return true;
      return pokemon.type === this.state.pokemonType;
    });
  }

  btnFire() { 
    this.setState({
      pokemonType: 'Fire',
      currPokemon: 0,
    });
  }

  btnPsychic() {
    this.setState({ pokemonType: 'Psychic', currPokemon: 0 });
  }

  btnAll = () => {
    this.setState({
      pokemonType: 'all',
      pokemonsLength: this.props.pokemons.length - 1,
    });
  };

  render() {
    const filteredPokemons = this.filter();
    const lengthPokemons = filteredPokemons.length
    const pokemon = filteredPokemons[this.state.currPokemon];
    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemon} />
        <div>
          <button onClick={() => this.previousBtn(lengthPokemons)}>Anterior</button>
          <button onClick={() => this.nextBtn(lengthPokemons)}>Próximo</button>
        </div>
        <div>
          <button onClick={this.btnFire}>Fire</button>
          <button onClick={this.btnPsychic}>Psychic</button>
          <button onClick={this.btnAll}>All</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
