import React from 'react';
import Card from './components/Card';
import './App.scss';
import data from './data.json';


function App() {
  const list = data.map((item, key) =>
    <li key={`card${key}`}
      data-oo-col="span4 span3@sm span2@md"><Card {...item} /></li>
  );
  return (
    <div className="container">
      <h1>Guess Who</h1>
      <ul className="list-unstyle" data-oo-row="stretch">
        {list}
      </ul>
    </div>
  );
}

export default App;
