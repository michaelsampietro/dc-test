import React from 'react';
import logo from '../../logo.png';
import styles from './styles.module.css';

const AppHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Delivery Center" />
      </div>
    </div>
  );
};

export default AppHeader;
