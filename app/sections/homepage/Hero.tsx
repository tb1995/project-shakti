import React from 'react';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Empowering <span className={styles.secondaryColor}>Artisans</span>{' '}
          <br /> <span className={styles.secondaryColor}>Transforming </span>{' '}
          Lives
        </h1>

        <p>
          Discover handcrafted treasures that preserve traditions, uplift
          communities, and create lasting impact. Every piece tells a story of
          resilience, creativity, and empowerment.
        </p>
      </div>
      <div className={styles.imageContainer}></div>
    </section>
  );
};

export default Hero;
