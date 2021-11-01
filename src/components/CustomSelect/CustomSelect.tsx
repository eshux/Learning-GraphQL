import React, { FC } from 'react';
import styles from './CustomSelect.module.scss';

type Props = {
  options: {
    id: number;
    value: string;
  }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  value: string;
}

const CustomSelect:FC<Props> = ({ options, onChange, placeholder, value }) => (
  <select
    className={styles.select}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  >
    {options.map((item) => (
      <option
        className={styles.option}
        key={item.id}
        value={item.value}
      >
        {item.value}
      </option>
    ))}
  </select>
);

export default CustomSelect;
