import React from 'react';
import styles from './separator.module.scss';

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
        height: thickness,
      }}
    />
  );
};

export default Separator;
