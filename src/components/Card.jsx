import React from 'react';
import styles from './Card.module.css';

const Card = ({ item, type }) => {
  const handleDisplay = (e) => {
    e.preventDefault();
    window.open(e.currentTarget.href, '_blank');
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{item.id}</span>
        <h3 className={styles.cardTitle}>{item.title}</h3>
      </div>
      <a 
        href={item.href} 
        className={styles.displayButton}
        onClick={handleDisplay}
      >
        Display
      </a>
    </div>
  );
};

export default Card;
