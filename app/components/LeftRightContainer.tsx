'use client';
import React from 'react';
import Image from 'next/image';
import styles from './left-right-container.module.scss';
import Separator from './Separator';

interface LeftRightContainerProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  imageFirst?: boolean; // Optional prop, defaults to false
}

const LeftRightContainer: React.FC<LeftRightContainerProps> = ({
  src,
  alt,
  title,
  description,
  imageFirst = false, // Default value
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Text Container */}
        <div
          className={styles.textContainer}
          style={{ order: imageFirst ? 2 : 1 }}
        >
          <h3 className={`${styles.title} colorPrimary`}>{title}</h3>
          <Separator color="secondary" thickness="3px" width="400px" />
          <p className={`${styles.description} colorPrimary `}>{description}</p>
        </div>

        {/* Image Container */}
        <div
          className={styles.imageContainer}
          style={{ order: imageFirst ? 1 : 2 }} // Adjust order based on imageFirst
        >
          {/* <Image src={src} alt={alt} width={550} height={550} fill={false} /> */}
          <img src={src} alt={alt} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default LeftRightContainer;
