import React, { FC } from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
  filled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
}

const Button:FC<Props> = ({ children, onClick, filled, type, fullWidth }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    className={`
      ${styles.button}
      ${filled ? styles.filled : ''}
      ${fullWidth ? styles.full : ''}
    `}
  >
    {children}
  </button>
);

export default Button;
