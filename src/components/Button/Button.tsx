import React, { FC } from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
}

const Button:FC<Props> = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.button}
  >
    {children}
  </button>
);

export default Button;
