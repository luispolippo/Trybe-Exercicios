import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.nextBtn = this.nextBtn.bind(this);
        this.previousBtn = this.previousBtn.bind(this);
    
        this.state = {
          currPokemon: 0,
          pokemonsLength: props.pokemons.length - 1,
        };
      }
    
      nextBtn() {
        this.setState((prevState) => {
          if (prevState.currPokemon === prevState.pokemonsLength) {
            return { currPokemon: 0 };
          }
          return { currPokemon: prevState.currPokemon + 1 };
        });
      }
    
      previousBtn() {
        this.setState((prevState) => {
            if (prevState.currPokemon === 0) {
                return { currPokemon: prevState.pokemonsLength }
            } 
            return { currPokemon: prevState.currPokemon - 1 }
        });
      }
    
      render() {
        return (
          <div className='pokedex'>
            <Pokemon pokemon={this.props.pokemons[this.state.currPokemon]} />
            <button onClick={this.previousBtn}>Anterior</button>
            <button onClick={this.nextBtn}>Próximo</button>
          </div>
        );
      }
}

export default Pokedex;