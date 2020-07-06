import React from 'react';
import Card from './Card';
import data from '../data.json';

interface Options {
  isSelectable?: boolean;
  isFlippable?: boolean;
}

function Deck(props:Options = {
  isSelectable: false,
  isFlippable: false,
}) {

  const list = data.map((item, key) => {
    const id = key + 1;
    return <li key={`card${id}`}
      data-oo-col="span4 span3@sm span2@md">
      <Card character={{...item, id}} {...props}/>
    </li>
  });

  return (
    <ul className="list-unstyle" data-oo-row="stretch">
      {list}
    </ul>
  );
}

export default Deck;