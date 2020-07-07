import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ViewEnum } from '../store/Game/types';
import { setView } from '../store/Game/actions';
import { ICharacter } from '../interfaces';
import styles from './Select.module.scss';
import Deck from '../components/Deck';
import Button from '../components/Button';

interface ViewProps {
  selectedCharacter: ICharacter|null,
  setView: typeof setView
}

function SelectView(props: ViewProps) {

  const character = props.selectedCharacter;
  
  const confirm = ():void => {
    props.setView(ViewEnum.Guess);
  }

  return (
    <div className={styles.select}>
      <section className="container">
        <h1>Select Your Character</h1>
        <Deck isSelectable={true} />
      </section>
      { character ?
        <div className={styles.confirmation}>
          <div className="container">
            <Button onClick={confirm} variant="dark">
              Confirm
              <span>{character.name}</span>
              <img src={character.img} alt={character.name} width="30" height="30" />
            </Button>
          </div>
        </div>
      : '' }
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  const selection = state.game.characters.filter(item => item.id === state.players.characterId);
  return {
    selectedCharacter: selection.length ? selection[0] : null
  }
}

export default connect(
  mapStateToProps,
  { setView }
)(SelectView);
