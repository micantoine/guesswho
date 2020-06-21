import React from 'react';
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
  isSelected?: boolean;
  setCharacter: typeof setCharacter,
  removeCharacter: typeof removeCharacter,
}

interface CardState {
  isFlipped: boolean;
}

class Card extends React.Component<CardProps, CardState> {

  constructor(props: CardProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state: Readonly<CardState> = {
    isFlipped: false,
  }

  handleClick() {
    if (this.props.isSelectable) {
      if (this.props.characterId === this.props.character.id) {
        this.props.removeCharacter();
      } else {
        this.props.setCharacter(this.props.character.id);
      }
    }
    if (this.props.isFlippable) {
      this.setState(state => ({ isFlipped: !state.isFlipped }));
    }
  }

  render() {
    const { isFlipped } = this.state;

    return (
      <div className={styles.wrapper}
        onClick={this.handleClick}>
        <div className={`${styles.card}
          ${isFlipped ? styles.flipped : ''}
          ${this.props.characterId === this.props.character.id ? styles.selected : ''}
        `}>
          <div className={styles.front}>
            <img src={this.props.character.img} alt={this.props.character.name} width="200" />
            <h4>{this.props.character.name}</h4>
          </div>
          <div className={styles.back}>?</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    characterId: state.characterId
  }
}

export default connect(
  mapStateToProps,
  { setCharacter, removeCharacter }
)(Card);