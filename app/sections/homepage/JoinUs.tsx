import React from 'react';
import styles from './join-us.module.scss';
import Image from 'next/image';
import Form from '@/app/components/Form';

const JoinUs = () => {
  return (
    <div id="join-us" className={styles.container}>
      <h2 className="colorPrimary">Join Us in Empowering Artisans</h2>
      <div className={styles.innerContainer}>
        <div className={styles.heading}></div>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={`colorPrimary ${styles.maxWidth}`}>
              Be part of a global movement to connect artisans with
              opportunities and create lasting change.{' '}
            </p>
            <p className={`colorPrimary ${styles.maxWidth}`}>
              Together, we can bring "Shakti" where it's needed most.
            </p>
            <div style={{ marginTop: '90px' }} className={`${styles.maxWidth}`}>
              <Form />
            </div>
          </div>
          <div className={styles.imageContainer}>
            {/* <Image
              src="/form-asset.webp"
              alt="Join Us and Empower Artisans"
              width="600"
              height="600"
            /> */}
            <img
              src="/global-partnerships.webp"
              alt="Join Us and Empower Artisans"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
