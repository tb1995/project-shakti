'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navToggle = () => {
    setShowFullscreen(!showFullscreen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${
        isScrolled ? styles.containerShadow : ''
      }`}
    >
      {/* Logo */}
      <div className={styles.logo} style={{ zIndex: 101 }}>
        {!showFullscreen ? (
          <img
            src="/logo-white.webp"
            alt="Project Shakti Logo"
            className={styles.logoImage}
          />
        ) : (
          <img
            src="/logo-white.webp"
            alt="Project Shakti Logo"
            className={styles.logoImage}
          />
        )}
      </div>

      {/* Desktop Navigation Links */}
      <ul className={styles.navLinks}>
        <a href="#home" className={styles.link}>
          Mission
        </a>
        <a href="#about" className={styles.link}>
          Stories
        </a>
        <a href="#what-we-do" className={styles.link}>
          Products
        </a>
        <a href="#contact" className={styles.link}>
          Contact Us
        </a>
      </ul>

      {/* Burger Menu */}
      <div className={styles.burger} onClick={navToggle}>
        <div className={showFullscreen ? styles.active : ''}></div>
        <div className={showFullscreen ? styles.active : ''}></div>
        <div className={showFullscreen ? styles.active : ''}></div>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`${styles.fullscreenMenu} ${
          showFullscreen ? styles.displayBlock : ''
        }`}
      >
        <ul className={styles.navLinksMobile}>
          <li>
            <a href="#home" onClick={navToggle} className={styles.linkMobile}>
              Mission
            </a>
          </li>
          <li>
            <a href="#about" onClick={navToggle} className={styles.linkMobile}>
              Stories
            </a>
          </li>
          <li>
            <a
              href="#what-we-do"
              onClick={navToggle}
              className={styles.linkMobile}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={navToggle}
              className={styles.linkMobile}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
