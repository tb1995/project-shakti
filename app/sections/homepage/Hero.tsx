'use client';

import React from 'react';
import styles from './hero.module.scss';
import Button from '@/app/components/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Project <span className={styles.secondaryColor}>Shakti.</span>
          <br /> Empowering{' '}
          <span className={styles.secondaryColor}>Artisans</span>{' '}
          <span className={styles.secondaryColor}>Transforming </span> Lives
        </h1>

        <p className="colorWhite">
          Discover handcrafted treasures that preserve traditions, uplift
          communities, and create lasting impact. Every piece tells a story of
          resilience, creativity, and empowerment.
        </p>

        <div className={styles.buttonContainer}>
          <Button
            text={'Products'}
            onClick={() => {
              console.log('nothing yet');
            }}
            type={'primary'}
          />

          <Button
            text={'Mission'}
            onClick={() => {
              const section = document.getElementById('mission');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            type={'secondary'}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/form-asset.webp"
          alt="Shakti Hero Section"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
