import React, { Component } from 'react';
import './PokemonsDetails.css';

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
        const {id, name, type, averageWeight , summary, foundAt, image} = pokemon;
        return (<div key={id}>
          <h2>{name} Details</h2>
          <div className="pokemon">
            <div>
              <p> {name} </p>
              <p> {type} </p>
              <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
            <img src={image} alt={`${name} sprite`} />
          </div>
          <div>
          <h2>Summary</h2>  
          <p>{summary}</p>
          </div>
          <div className="locations">
            <h2>Game Locations</h2>
            <div className="maps">
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
          </div>
        </div>
      )})
  }
}

export default PokemonDetails;
