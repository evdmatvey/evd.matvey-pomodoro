import { Timer } from '../../../entities/Timer';
import { useSettingsStore } from '../../../entities/Settings';
import { useWorkSessionTimerStore } from '../model/store';

const WorkSessionTimer = () => {
  const workSessionTime = useSettingsStore((state) => state.workSessionTime);
  const isStopped = useWorkSessionTimerStore((state) => state.isStopped);
  const completeWorkSession = useWorkSessionTimerStore((state) => state.completeWorkSession);

  const workSessionTimeInSeconds = workSessionTime * 60;

  return (
    <Timer
      isPlaying={!isStopped}
      duration={workSessionTimeInSeconds}
      totalSeconds={workSessionTime}
      endCallback={completeWorkSession}
    />
  );
};

export default WorkSessionTimer;
