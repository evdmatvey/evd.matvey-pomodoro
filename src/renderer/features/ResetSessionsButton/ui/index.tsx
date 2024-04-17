import { useAllSessionCompleted } from '../../../entities/Sessions';
import { Button } from '../../../shared/UI';

const ResetSessionsButton = () => {
  const { resetSessions } = useAllSessionCompleted();

  return (
    <Button color="accent" onClick={resetSessions}>
      Reset
    </Button>
  );
};

export default ResetSessionsButton;
