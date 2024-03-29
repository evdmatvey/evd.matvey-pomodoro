import React, { FC, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode | ReactNode[];
  color: 'accent' | 'red';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.root} ${styles[`color-${color}`]}`}>
      {children}
    </button>
  );
};

export default Button;
