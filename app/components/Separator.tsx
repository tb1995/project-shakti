import React from 'react';
import styles from './Separator.module.scss';

interface SeparatorProps {
  width: string;
  thickness: string;
  color: 'primary' | 'secondary';
}

const Separator: React.FC<SeparatorProps> = ({ width, thickness, color }) => {
  return (
    <div
      className={`${styles.separator} backgroundColor-${color}`}
      style={{
        width,
        height: thickness,
      }}
    />
  );
};

export default Separator;
