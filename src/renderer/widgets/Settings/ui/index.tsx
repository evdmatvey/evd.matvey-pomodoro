import { useState } from 'react';
import { UpdateWorkTime } from '../../../features/UpdateWorkTime';
import { UpdateSessionPerDay } from '../../../features/UpdateSessionPerDay';
import { UpdateRestTime } from '../../../features/UpdateRestTime';
import { UpdateTheme } from '../../../features/UpdateTheme';
import { CloseLeftIcon, SettingsIcon } from '../../../shared/UI/icons';

import styles from './Settings.module.css';

const Settings = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  return (
    <div className={styles.root}>
      <button className={styles.openBtn} onClick={openHandler}>
        <SettingsIcon />
      </button>
      <div className={isOpen ? `${styles.settings} ${styles.open}` : styles.settings}>
        <div className={styles.title}>
          <h2>Settings</h2>
          <button className={styles.closeBtn} onClick={closeHandler}>
            <CloseLeftIcon />
          </button>
        </div>
        <UpdateWorkTime />
        <UpdateRestTime />
        <UpdateSessionPerDay />
        <UpdateTheme />
      </div>
    </div>
  );
};

export default Settings;
