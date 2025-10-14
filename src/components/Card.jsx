import React from 'react';
import styles from './Card.module.css';

const Card = ({ item, type }) => {
  const handleDisplay = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

  // Function to get the filename from path
  const getFileName = (path) => {
    return path.split('/').pop().replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{item.id}</span>
        <h3 className={styles.cardTitle}>{item.title}</h3>
      </div>
      <div className={styles.buttonContainer}>
        <a 
          href={item.href} 
          className={styles.displayButton}
          onClick={(e) => handleDisplay(e, item.href)}
        >
          Display
        </a>
        {item.additionalFiles && item.additionalFiles.length > 0 && (
          <div className={styles.additionalFiles}>
            {item.additionalFiles.map((file, index) => (
              <a
                key={index}
                href={file}
                className={styles.additionalFileButton}
                onClick={(e) => handleDisplay(e, file)}
                title={getFileName(file)}
              >
                File {index + 1}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
