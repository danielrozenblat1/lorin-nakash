import React, { useEffect } from 'react';
import styles from './What.module.css';
import ScrollReveal from 'scrollreveal';

const ImageTextComponent = ({ items }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 800,
      distance: "60px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.description}`, {
      duration: 800,
      distance: "60px",
      origin: "left",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={`${styles.row} ${index % 2 === 0 ? styles.imageRight : styles.imageLeft}`}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
              </div>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageTextComponent;