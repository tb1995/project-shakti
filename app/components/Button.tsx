import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void; // Function to handle button clicks
  type: 'primary' | 'secondary'; // Enum-like union type
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${type}-button`} // Add class based on type
    >
      {text}
    </button>
  );
};

export default Button;
