import React from 'react';
import Card from './Card';
import data from '../data.json';

interface Options {
  isSelectable: boolean;
  isFlippable: boolean;
}

class Deck extends React.Component<Options> {

  static defaultProps = {
    isSelectable: false,
    isFlippable: false,
  }
  render() {

    const list = data.map((item, key) =>
      <li key={`card${key}`}
        data-oo-col="span4 span3@sm span2@md">
          <Card {...item} {...this.props}/>
        </li>
    );
  
    return (
      <ul className="list-unstyle" data-oo-row="stretch">
        {list}
      </ul>
    );
  }
}

export default Deck;