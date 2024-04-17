import { useSessionsStore } from '../../../../entities/Sessions';
import { useSettingsStore } from '../../../../entities/Settings';
import CompletedSessionIndicator from '../CompletedSessionIndicator';

import styles from './CompletedSessionIndicators.module.css';

const CompletedSessionIndicators = () => {
  const completedSessionCount = useSessionsStore((store) => store.completedSessionCount);
  const sessionPerDay = useSettingsStore((store) => store.sessionPerDay);

  return (
    <div className={styles.root}>
      {Array.from({ length: sessionPerDay }).map((_, index) => {
        return <CompletedSessionIndicator isCompleted={index < completedSessionCount} />;
      })}
    </div>
  );
};

export default CompletedSessionIndicators;
