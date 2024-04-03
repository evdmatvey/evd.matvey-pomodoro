import { useWorkSessionTimerStore } from '../../../features/WorkSessionTimer';
import { Button } from '../../../shared/UI';

const ContinueTimerButton = () => {
  const continueWorkSession = useWorkSessionTimerStore((store) => store.continueWorkSession);
  return (
    <Button color="accent" onClick={continueWorkSession}>
      Continue
    </Button>
  );
};

export default ContinueTimerButton;
