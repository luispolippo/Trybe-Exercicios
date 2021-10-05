import { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke
    return(
      <section className='pokemon'>
        <div className='pokemonInfo'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value}  {averageWeight.measurementUnit}</p>
        </div>
        <div className="pokemonImage">
          <img src={image} alt={name} />
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string, 
}

export default Pokemon;