import React from 'react';
import styles from './Card.module.scss';

interface Character {
  name: string;
  img: string;
}

function Card(props: Character) {
  return (
    <div className={styles.card}>
      <img src={props.img} alt={props.name} width="200" />
      <h4>{props.name}</h4>
    </div>
  );
}

export default Card;