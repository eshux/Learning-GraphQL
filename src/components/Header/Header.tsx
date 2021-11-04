import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from '../../data/pages';
import styles from './Header.module.scss';

const Header:FC = () => (
  <header className={styles.header}>
    <h2 className={styles.title}>GraphQL</h2>
    <nav className={styles.nav}>
      {pages.map((item, index) => (
        <NavLink
          key={item.name}
          className={styles.navItem}
          activeClassName={styles.active}
          exact={index === 0}
          to={item.path}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
