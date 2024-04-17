import { useWorkSessionTimerStore } from '../../../features/WorkSessionTimer';
import { Button } from '../../../shared/UI';

const ResetSessionButton = () => {
  const resetWorkSession = useWorkSessionTimerStore((store) => store.resetWorkSession);

  return (
    <Button color="red" onClick={resetWorkSession}>
      Reset
    </Button>
  );
};

export default ResetSessionButton;
