'use client';
import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        {/* Replace with your actual logo */}
        {/* <Image
          src={'/logo-white.webp'}
          alt="Project Shakti Logo"
          width={800}
          height={800}
        /> */}

        <img
          src={'/logo-white.webp'}
          alt="Project Shakti Logo"
          className={styles.image}
        />
      </div>
      <div className={styles.rightColumn}>
        <p style={{ fontSize: '20px' }} className="colorWhite">
          You can find us at:
        </p>
        <nav className={styles.links}>
          <a
            href="https://www.instagram.com/projectshakti_exe?igsh=eDVqcTZvc2xlY2R0&utm_source=qr"
            className={styles.iconLink}
          >
            <Image
              src={'/icons8-instagram.svg'}
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569906660070"
            className={styles.iconLink}
          >
            <Image
              src={'/icons8-facebook-logo.svg'}
              alt="Facebook"
              width={30}
              height={30}
            />
          </a>
          {/* <a href="/link3" className={styles.iconLink}>
            <Image
              src={'/icons8-x-logo.svg'}
              alt="X (Twitter)"
              width={30}
              height={30}
            />
          </a> */}
          <a
            href="https://www.linkedin.com/company/project-shakti/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BlroY%2FWuxSJ%2BuY5aDydtzzg%3D%3D"
            className={styles.iconLink}
          >
            <Image
              src={'/icons8-linkedin-logo.svg'}
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
