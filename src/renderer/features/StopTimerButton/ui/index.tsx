import { useWorkSessionTimerStore } from '../../../features/WorkSessionTimer';
import { Button } from '../../../shared/UI';

const StopTimerButton = () => {
  const pauseWorkSession = useWorkSessionTimerStore((state) => state.pauseWorkSession);
  return (
    <Button color="red" onClick={pauseWorkSession}>
      Stop
    </Button>
  );
};

export default StopTimerButton;
