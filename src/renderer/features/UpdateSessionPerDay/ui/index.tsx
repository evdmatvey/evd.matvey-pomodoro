import { SettingsItem } from '../../../entities/Settings';
import { Input } from '../../../shared/UI';
import { useUpdateSessionPerDay } from '../hooks/useUpdateSessionPerDay';

const UpdateSessionPerDay = () => {
  const { sessions, isError, updateSessionsHandler } = useUpdateSessionPerDay();

  return (
    <SettingsItem title="Session per day" description="Set a value from 1 to 10" isError={isError}>
      <Input placeholder="10" value={sessions} onChange={updateSessionsHandler} />
    </SettingsItem>
  );
};

export default UpdateSessionPerDay;
