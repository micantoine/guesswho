import React from 'react';
import Card from './Card';
import data from '../data.json';

function Deck() {
  const list = data.map((item, key) =>
    <li key={`card${key}`}
      data-oo-col="span4 span3@sm span2@md"><Card {...item} /></li>
  );
  return (
    <ul className="list-unstyle" data-oo-row="stretch">
      {list}
    </ul>
  );
}

export default Deck;