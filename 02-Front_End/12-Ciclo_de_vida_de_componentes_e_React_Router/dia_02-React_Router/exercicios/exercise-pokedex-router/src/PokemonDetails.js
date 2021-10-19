import React, { Component } from 'react';

class PokemonDetails extends Component {
  render() {
    const {
      pokemons,
      match: {
        params: { id },
      },
    } = this.props;
    const idNumber = parseInt(id);
    return pokemons.filter((pokemon) => pokemon.id === idNumber)
      .map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.type}</p>
          <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
          <p>{pokemon.summary}</p>
          {
            pokemon.foundAt.map((location) => (
              <div>
                <p>{location.location}</p>
                <img src={location.map} alt={location.location} />
              </div>
            ))
          }
        </div>
      ))
  }
}

export default PokemonDetails;
