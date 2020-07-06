import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import data from '../data.json';
import styles from './Select.module.scss';
import Deck from '../components/Deck';
import Button from '../components/Button';

function SelectView(props: AppState) {

  const character = props.characterId
    ? data[props.characterId]
    : null;
  
  const confirm = ():void => {
    debugger;
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
              <img src={character.img} alt={character.name} width="30" />
            </Button>
          </div>
        </div>
      : '' }
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    characterId: state.characterId
  }
}

export default connect(mapStateToProps)(SelectView);
