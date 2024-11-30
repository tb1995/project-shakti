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
          Empowering <span className={styles.secondaryColor}>Artisans</span>{' '}
          <br /> <span className={styles.secondaryColor}>Transforming </span>{' '}
          Lives
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
              console.log('nothing yet either');
            }}
            type={'secondary'}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/shakti-hero-section.webp" // Path relative to the `public` folder
          alt="Shakti Hero Section"
          layout="fill" // Makes the image fill its parent
          objectFit="contain" // Ensures the image covers the container without distortion
        />
      </div>
    </section>
  );
};

export default Hero;