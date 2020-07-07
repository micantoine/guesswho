import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ICharacter } from '../interfaces';
import Deck from '../components/Deck';
import Card from '../components/Card';
import styles from './Guess.module.scss';

interface ViewProps {
  character: ICharacter
}

function GuessView(props: ViewProps) {
  return (
    <>
      <section className="container">
        <h1>Guess The Character</h1>
        <div className={styles.myCharacter}>
          <Card {...props}/>
        </div>
        <Deck isFlippable={true} />
      </section>
    </>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    character: state.game.characters.filter(item => item.id === state.players.characterId)[0]
  }
}

export default connect(mapStateToProps)(GuessView);
