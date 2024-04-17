import { ResetSessionsButton } from '../../../../features/ResetSessionsButton';
import { useSessionsStore, useAllSessionCompleted } from '../../../../entities/Sessions';
import RestSessionControls from '../RestSessionControls';
import WorkSessionControls from '../WorkSessionControls';

import styles from './TimerControls.module.css';

const TimerControls = () => {
  const currentSessionState = useSessionsStore((store) => store.currentSessionState);
  const { isAllSessionCompleted } = useAllSessionCompleted();

  if (isAllSessionCompleted)
    return (
      <div className={styles.root}>
        <ResetSessionsButton />
      </div>
    );

  return (
    <div className={styles.root}>
      {currentSessionState === 'work' ? <WorkSessionControls /> : <RestSessionControls />}
    </div>
  );
};

export default TimerControls;
