import { CompletedSessionIndicators } from '../widgets/CompletedSessionIndicators';
import TimerControls from '../widgets/TimerControls/ui/TimerControls';
import Session from '../widgets/Session/ui/Session';
import { Settings } from '../widgets/Settings';

const Main = () => {
  return (
    <>
      <Settings />
      <Session />
      <CompletedSessionIndicators />
      <TimerControls />
    </>
  );
};

export default Main;
