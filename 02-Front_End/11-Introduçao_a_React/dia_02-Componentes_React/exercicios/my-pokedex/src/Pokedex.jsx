import { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return(
      <section className='pokedex'>
        <div className="title">
          <h1>Pokedex</h1>
        </div>
        <div className="pokemons">
        {
          pokemons.map((pokemon) => {
            return <Pokemon key={ pokemon.id } poke={ pokemon }/>
          })
        }
        </div>
      </section>
    );
  }
}

export default Pokedex;