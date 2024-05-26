import { Timer } from '../../../entities/Timer';
import { useSessionsStore } from '../../../entities/Sessions';
import { SettingsStorage, useSettingsStore } from '../../../entities/Settings';
import { useWorkSessionTimerStore } from '../model/store';

const WorkSessionTimer = () => {
  const workSessionTime = useSettingsStore((store) => store.workSessionTime);
  const isStopped = useWorkSessionTimerStore((store) => store.isStopped);
  const completeWorkSession = useWorkSessionTimerStore((store) => store.completeWorkSession);
  const resetKey = useWorkSessionTimerStore((store) => store.resetKey);
  const setRestSession = useSessionsStore((store) => store.setRestSession);
  const completedSessionCount = useSessionsStore((state) => state.completedSessionCount);

  const workSessionTimeInSeconds = workSessionTime * 60;

  const completeWorkSessionHandler = () => {
    completeWorkSession();
    setRestSession();
    SettingsStorage.setCompletedSessions(completedSessionCount + 1);
  };

  return (
    <Timer
      resetKey={resetKey}
      isPlaying={!isStopped}
      duration={workSessionTimeInSeconds}
      totalSeconds={workSessionTime}
      endCallback={completeWorkSessionHandler}
    />
  );
};

export default WorkSessionTimer;
