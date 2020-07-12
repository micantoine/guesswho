import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ICharacter } from '../interfaces';
import Deck from '../components/Deck';
import styles from './Guess.module.scss';

interface ViewProps {
  character: ICharacter
}

function GuessView(props: ViewProps) {
  return (
    <section className="container">
      <div className={styles.character}>
        <img src={props.character.img} alt={props.character.name} />
        <p>
          You're <strong>{props.character.name}</strong><br/>
          Guess your opponent's character by asking question in turns.<br/>
          Click on a card to hide it from the list.
        </p>
      </div>
      <Deck isFlippable={true} />
    </section>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    character: state.game.characters.filter(item => item.id === state.players.characterId)[0]
  }
}

export default connect(mapStateToProps)(GuessView);
