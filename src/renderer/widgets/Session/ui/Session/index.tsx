import { useAllSessionCompleted, useSessionsStore } from '../../../../entities/Sessions';
import RestSession from '../RestSession';
import WorkSession from '../WorkSession';

import styles from './Session.module.css';

const Session = () => {
  const currentSessionState = useSessionsStore((store) => store.currentSessionState);
  const { isAllSessionCompleted } = useAllSessionCompleted();

  if (isAllSessionCompleted) return <div className={styles.message}>All sessions continued</div>;

  return (
    <div className={styles.root}>
      {currentSessionState === 'rest' ? <RestSession /> : <WorkSession />}
    </div>
  );
};

export default Session;
