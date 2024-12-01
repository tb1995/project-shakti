'use client';
import React from 'react';
import styles from './Form.module.scss'; // Make sure the SCSS file is in the same folder

const Form = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="First Name"
        className={styles.formField}
      />
      <input
        type="email"
        placeholder="Email Address"
        className={styles.formField}
      />
      <button
        type="submit"
        className={`${styles.formButton} .backgroundColor-primary`}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
