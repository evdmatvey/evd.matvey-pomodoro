import { useSessionsStore } from '../../../entities/Sessions';
import { Button } from '../../../shared/UI';

const SkipSessionButton = () => {
  const completeCurrentSession = useSessionsStore((store) => store.completeCurrentSession);
  return (
    <Button color="accent" onClick={completeCurrentSession}>
      Skip
    </Button>
  );
};

export default SkipSessionButton;
