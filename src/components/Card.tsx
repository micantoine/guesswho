import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  name: string;
  img: string;
  isSelectable: boolean;
  isFlippable: boolean;
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
            <img src={this.props.img} alt={this.props.name} width="200" />
            <h4>{this.props.name}</h4>
          </div>
          <div className={styles.back}>?</div>
        </div>
      </div>
    );
  }
}

export default Card;