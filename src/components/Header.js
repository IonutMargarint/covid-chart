import React from "react";

import styles from "./Header.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <header>
        <h2>COVID-19 Tracker</h2>
      </header>
    </nav>
  );
};

export default Header;
