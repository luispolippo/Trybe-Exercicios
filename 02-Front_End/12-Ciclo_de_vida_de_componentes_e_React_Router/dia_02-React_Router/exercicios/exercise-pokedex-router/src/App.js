import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails'
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1> Pokedex </h1>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails pokemons={pokemons} {...props}/>} />
          <Route path="/about" component={About} />
          <Route exact path="/" render={(props) => <Pokedex pokemons={pokemons} {...props}/>} />
          <Route path="*" component={NotFound}/>
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;