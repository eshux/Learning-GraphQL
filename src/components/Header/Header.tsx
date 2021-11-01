import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header:FC = () => (
  <header className={styles.header}>
    <h2 className={styles.title}>GraphQL</h2>
    <nav className={styles.nav}>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.active}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.active}
        to="/queries"
      >
        Queries
      </NavLink>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.active}
        to="/mutations"
      >
        Mutations
      </NavLink>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.active}
        to="/refetching"
      >
        Refetching
      </NavLink>
    </nav>
  </header>
);

export default Header;
