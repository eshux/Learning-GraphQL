import React, { FC } from 'react';
import styles from './Card.module.scss';

type Props = {
  image: string;
  alt: string;
  size?: 'xs';
}

const Card:FC<Props> = ({ image, alt, children, size }) => (
  <div className={`${styles.card} ${size === 'xs' ? styles.card_xs : ''}`}>
    <img src={image} alt={alt} className={styles.img} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

export default Card;
