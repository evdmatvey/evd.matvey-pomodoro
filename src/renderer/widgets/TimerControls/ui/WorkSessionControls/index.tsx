import { useState } from 'react';
import { StopTimerButton } from '../../../../features/StopTimerButton';
import { useWorkSessionTimerStore } from '../../../../features/WorkSessionTimer';
import { ResetCurrentSession } from '../../../../features/ResetSessionButton';
import { ContinueTimerButton } from '../../../../features/ContinueTimerButton';
import { StartSessionButton } from '../../../../features/StartSessionButton';

const WorkSessionControls = () => {
  const isStopped = useWorkSessionTimerStore((store) => store.isStopped);
  const [isStarted, setIsStarted] = useState<boolean>(!isStopped);
  return (
    <>
      {isStarted ? (
        <>
          {isStopped ? (
            <>
              <ResetCurrentSession />
              <ContinueTimerButton />
            </>
          ) : (
            <StopTimerButton />
          )}
        </>
      ) : (
        <StartSessionButton startSessionCallback={() => setIsStarted(true)} />
      )}
    </>
  );
};

export default WorkSessionControls;
