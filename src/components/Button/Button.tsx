import React, { FC } from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
  filled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button:FC<Props> = ({ children, onClick, filled, type }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className={`${styles.button} ${filled ? styles.filled : ''}`}
  >
    {children}
  </button>
);

export default Button;
