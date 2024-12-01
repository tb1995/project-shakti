import * as React from 'react';
import styles from './email-template.module.scss';

interface EmailTemplateProps {
  firstName: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
}) => (
  <div>
    <h1 className={styles.heading}>We got a signup!</h1>

    <div className={styles.body}>
      <p>Their deets:</p>
      <p>First Name: {firstName}</p>
      <p>Email Address: {email}</p>
    </div>
  </div>
);
