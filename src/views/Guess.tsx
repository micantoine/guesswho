import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ViewEnum } from '../store/Game/types';
import { setView } from '../store/Game/actions';
import { ICharacter } from '../interfaces';
import Deck from '../components/Deck';
import Button from '../components/Button';
import IconBack from '../components/IconBack';
import styles from './Guess.module.scss';

interface ViewProps {
  character: ICharacter
  setView: typeof setView
}

function GuessView(props: ViewProps) {

  const back = (): void => {
    props.setView(ViewEnum.Select);
  }

  return (
    <section className="container">
      <Button
        className={styles.button}
        variant="dark circle"
        onClick={back}><IconBack width={24} /></Button> 
      <div className={styles.character}>
        <img src={props.character.img} alt={props.character.name} />
        <p>
          You're <strong>{props.character.name}</strong><br/>
          Guess your opponent's character by asking questions in turns.
          <span className={styles.instruction}>Click on a card to turn it over.</span>
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

export default connect(
  mapStateToProps,
  { setView }
)(GuessView);
