import React from 'react';
import logo from './logo.svg';
import ListPokemon from './pages/ListPokemon.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Pokédex
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <ListPokemon></ListPokemon>
      </header>
    </div>
  );
}

export default App;
