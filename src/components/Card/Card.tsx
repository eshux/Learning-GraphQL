import React, { FC } from 'react';
import styles from './Card.module.scss';

type Props = {
  text: string;
}

const Card:FC<Props> = ({ text }) => (
  <div className={styles.card}>
    {text}
  </div>
);

export default Card;
