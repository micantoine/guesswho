import React from 'react';
import Deck from './components/Deck';
import './App.scss';


function App() {
  return (
    <div className="container">
      <h1>Select Your Character</h1>
      <Deck />
    </div>
  );
}

export default App;
