import React, { FC } from 'react';

import styles from './Input.module.css';

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = ({ placeholder, value, onChange }) => {
  const changeHandler = (text: string) => {
    onChange(text);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.root}
      value={value}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
};

export default Input;
