import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  name: string;
  img: string;
}

interface CardState {
  isFlipped: boolean;
}


class Card extends React.Component<CardProps, CardState> {

  state: Readonly<CardState> = {
    isFlipped: false
  }

  render() {
    const { isFlipped } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
          onClick={() => this.setState(state => ({ isFlipped: !state.isFlipped}))}>
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