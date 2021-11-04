import React, { FC } from 'react';
import styles from './Card.module.scss';

type Props = {
  image: string;
  alt: string;
}

const Card:FC<Props> = ({ image, alt, children }) => (
  <div className={styles.card}>
    <img src={image} alt={alt} className={styles.img} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default Card;
