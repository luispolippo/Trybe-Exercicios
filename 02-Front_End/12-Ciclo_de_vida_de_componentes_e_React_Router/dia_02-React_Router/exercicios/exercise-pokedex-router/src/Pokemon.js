import React from 'react';
import { Link } from 'react-router-dom'
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image, id } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    <p><Link to={`/pokemons/${id}`}>Mais Detalhes</Link></p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;