'use client';
import React, { useState } from 'react';
import styles from './form.module.scss';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState(''); // For displaying success or error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Reset message state
    setMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, emailAddress }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Email sent successfully!');
        setFirstName('');
        setEmailAddress('');
      } else {
        setMessage(data.error || 'Failed to send email.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        className={styles.formField}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} // Update firstName state
      />
      <input
        type="email"
        placeholder="Email Address"
        className={styles.formField}
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)} // Update emailAddress state
      />
      <button
        type="submit"
        className={`${styles.formButton} backgroundColor-primary`}
      >
        Submit
      </button>
      {message && <p className={styles.message}>{message}</p>}{' '}
      {/* Display success or error message */}
    </form>
  );
};

export default Form;
