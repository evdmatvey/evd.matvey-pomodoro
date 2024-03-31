import { FC, ReactNode } from 'react';

import styles from './SettingsItem.module.css';

interface SettingsItemProps {
  children: ReactNode | ReactNode[];
  title: string;
  description: string;
  isError: boolean;
}

const SettingsItem: FC<SettingsItemProps> = ({ children, title, description, isError }) => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p className={isError ? styles.error : ''}>{description}</p>
      </div>
      <div className={styles.control}>{children}</div>
    </div>
  );
};

export default SettingsItem;
