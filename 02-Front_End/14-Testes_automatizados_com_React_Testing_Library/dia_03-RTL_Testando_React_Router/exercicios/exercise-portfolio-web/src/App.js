import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/projects" component={ Projects } />
      <Route path="/contact" component={ Contact } />
      <Route path="/about" component={ About }/>
      <Route exact path="/" component={ Home }/>
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
