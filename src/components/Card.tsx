import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { setCharacter } from '../store/Players/actions';

import { ICharacter } from '../interfaces';
import styles from './Card.module.scss';

interface CardProps {
  character: ICharacter;
  isSelectable?: boolean;
  isFlippable?: boolean;
  isSelected?: boolean;
  setCharacter: typeof setCharacter
}

interface CardState {
  isFlipped: boolean;
  isSelected: boolean;
}

class Card extends React.Component<CardProps, CardState> {

  constructor(props: CardProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state: Readonly<CardState> = {
    isFlipped: false,
    isSelected: false,
  }

  handleClick() {
    if (this.props.isSelectable) {
      this.setState(state => ({ isSelected: !state.isSelected }));
      this.props.setCharacter(1);
    }
    if (this.props.isFlippable) {
      this.setState(state => ({ isFlipped: !state.isFlipped }));
    }
  }

  render() {
    const { isFlipped, isSelected } = this.state;

    return (
      <div className={styles.wrapper}
        onClick={this.handleClick}>
        <div className={`${styles.card}
          ${isFlipped ? styles.flipped : ''}
          ${isSelected ? styles.selected : ''}
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

export default connect(mapStateToProps, { setCharacter })(Card);