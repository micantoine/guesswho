import React, { Props } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ICharacter } from '../interfaces';

import Card from './Card';

interface DeckProps {
  characters: ICharacter[];
  isSelectable?: boolean;
  isFlippable?: boolean;
}

function Deck(props: DeckProps) {

  const list = props.characters.map((item) => {
    return <li key={`card${item.id}`}
      data-oo-col="span4 span3@sm span2@md">
      <Card
        character={{...item}}
        isSelectable={props.isSelectable}
        isFlippable={props.isFlippable}
      />
    </li>
  });

  return (
    <ul className="list-unstyle" data-oo-row="stretch">
      {list}
    </ul>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    characters: state.game.characters
  }
}

export default connect(mapStateToProps)(Deck);