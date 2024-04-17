import { FC } from 'react';
import { useWorkSessionTimerStore } from '../../../features/WorkSessionTimer';
import { Button } from '../../../shared/UI';

interface StartSessionButtonProps {
  startSessionCallback: () => void;
}

const StartSessionButton: FC<StartSessionButtonProps> = ({ startSessionCallback }) => {
  const continueWorkSession = useWorkSessionTimerStore((store) => store.continueWorkSession);

  const startSessionHandler = () => {
    continueWorkSession();
    startSessionCallback();
  };

  return (
    <Button color="accent" onClick={startSessionHandler}>
      Start
    </Button>
  );
};

export default StartSessionButton;
