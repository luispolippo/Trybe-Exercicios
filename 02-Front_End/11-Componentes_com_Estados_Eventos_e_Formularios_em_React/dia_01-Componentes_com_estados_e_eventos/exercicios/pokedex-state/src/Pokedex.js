import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css'

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPokemon: 0,
      pokemonType: 'All',
    };
  }

  nextBtn = (length) => {
    this.setState((prevState) => {
      if (prevState.currPokemon === length -1) {
        return { currPokemon: 0 };
      }
      return { currPokemon: prevState.currPokemon + 1 };
    });
  }

  previousBtn = (length) => {
    this.setState((prevState) => {
      if (prevState.currPokemon === 0) {
        return { currPokemon: length -1};
      }
      return { currPokemon: prevState.currPokemon - 1 };
    });
  }

  filter = () => {
    return this.props.pokemons.filter((pokemon) => {
      if (this.state.pokemonType === 'All') return true;
      return pokemon.type === this.state.pokemonType;
    });
  }

  handleTypeClick = (event) => {
    const element = event.target;
    const type = element.innerText
    this.setState({pokemonType: type, currPokemon: 0})
  }; 

  getPokemonTypes = () => {
    const typesDuplicated = this.props.pokemons.map((pokemon) => pokemon.type);
    return Array.from(new Set(typesDuplicated));
  };

  render() {
    const pokemonTypes = this.getPokemonTypes();
    const filteredPokemons = this.filter();
    const lengthPokemons = filteredPokemons.length
    const pokemon = filteredPokemons[this.state.currPokemon];
    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemon} />
        <div className="navButtons">
          <button onClick={() => this.previousBtn(lengthPokemons)} disabled={lengthPokemons <= 1}>Anterior</button>
          <button onClick={() => this.nextBtn(lengthPokemons)} disabled={lengthPokemons <= 1}>Próximo</button>
        </div>
        <div className="typeButtons">
          {
            pokemonTypes.map((type) => {
              return <Button key={type} onClick={this.handleTypeClick} type={type}/>
            })
          }
          <button onClick={this.handleTypeClick}>All</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
