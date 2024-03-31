import { FC } from 'react';

import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
  checked?: boolean;
  onChange?: (state: boolean) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ onChange, checked = false }) => {
  const changeHandler = (state: boolean) => {
    onChange(state);
  };

  return (
    <div className={styles.root}>
      <input
        onChange={(event) => changeHandler(event.target.checked)}
        type="checkbox"
        id="toggle-button"
        checked={checked}
      />
    </div>
  );
};

export default ToggleButton;
