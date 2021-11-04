import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return(
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/projects" element={ <Projects /> }/>
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    )
  }
}

export default App;
