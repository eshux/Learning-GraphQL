import React, { FC } from 'react';
import styles from './InfoField.module.scss';

type Props = {

}

const InfoField:FC<Props> = ({ children }) => (
  <div className={styles.field}>
    {children}
  </div>
);

export default InfoField;
