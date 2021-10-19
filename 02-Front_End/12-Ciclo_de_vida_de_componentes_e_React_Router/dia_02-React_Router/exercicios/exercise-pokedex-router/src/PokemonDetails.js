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
      .map((pokemon) => {
        const {id, name, type, averageWeight: {value, measurementUnit}, summary, foundAt} = pokemon;
        return (<div key={id}>
          <h2>{name}</h2>
          <p>{type}</p>
          <p>{value} {measurementUnit}</p>
          <p>{summary}</p>
          {
            foundAt.map((local) => {
              const {location, map} = local;
              return (
                <div>
                <p>{location}</p>
                <img src={map} alt={location} />
              </div>
            )})
          }
        </div>
      )})
  }
}

export default PokemonDetails;
