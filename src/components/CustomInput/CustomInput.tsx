import React, { FC } from 'react';
import styles from './CustomInput.module.scss';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  noRightBorder?: boolean;
}

const CustomInput:FC<Props> = ({ onChange, placeholder, value, noRightBorder }) => (
  <input
    className={`${styles.input} ${noRightBorder ? styles.noRightBorder : ''}`}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default CustomInput;
