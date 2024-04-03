import { Timer } from '../../../entities/Timer';
import { useSettingsStore } from '../../../entities/Settings';
import { useRestSessionTimerStore } from '../model/store';

const RestSessionTimer = () => {
  const restSessionTime = useSettingsStore((state) => state.restSessionTime);
  const isStopped = useRestSessionTimerStore((state) => state.isStopped);
  const completeRestSession = useRestSessionTimerStore((state) => state.completeRestSession);

  const restSessionTimeInSeconds = restSessionTime * 60;

  return (
    <Timer
      isPlaying={!isStopped}
      duration={restSessionTimeInSeconds}
      totalSeconds={restSessionTime}
      endCallback={completeRestSession}
    />
  );
};

export default RestSessionTimer;
