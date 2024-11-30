import React from 'react';

interface ButtonProps {
  text: string;
  url: string;
  type: 'primary' | 'secondary'; // Enum-like union type
}

const Button: React.FC<ButtonProps> = ({ text, url, type }) => {
  return (
    <a
      href={url}
      className={`button ${type}`} // Add class based on type
    >
      {text}
    </a>
  );
};

export default Button;
