import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import {
  setCharacter,
  removeCharacter
} from '../store/Players/actions';

import { ICharacter } from '../interfaces';
import styles from './Card.module.scss';

interface CardProps {
  characterId: number|null;
  character: ICharacter;
  isSelectable?: boolean;
  isFlippable?: boolean;
  setCharacter: typeof setCharacter,
  removeCharacter: typeof removeCharacter,
}

function Card(props: CardProps) {

  const [isFlipped, setIsFlipped] = useState(false);

  let isSelected = props.isSelectable && props.characterId === props.character.id;
  let cardClassName = [
    styles.card,
    isFlipped ? styles.flipped : '',
    isSelected ? styles.selected : ''
  ].join(' ');

  const handleClick = ():void => {
    if (props.isSelectable) {
      if (props.characterId === props.character.id) {
        props.removeCharacter();
      } else {
        props.setCharacter(props.character.id);
      }
    }
    if (props.isFlippable) {
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div className={styles.wrapper}
      onClick={handleClick}>
      <div className={cardClassName}>
        <div className={styles.front}>
          <img src={props.character.img} alt={props.character.name} width="200" />
          <h4>{props.character.name}</h4>
        </div>
        <div className={styles.back}>?</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    characterId: state.players.characterId
  }
}

export default connect(
  mapStateToProps,
  { setCharacter, removeCharacter }
)(Card);