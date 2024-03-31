import { SettingsItem, useSettingsStore, useUpdateTime } from '../../../entities/Settings';
import { Input } from '../../../shared/UI';

const UpdateWorkTime = () => {
  const restSessionTime = useSettingsStore((state) => state.restSessionTime);
  const setRestSessionTime = useSettingsStore((state) => state.setRestSessionTime);

  const { currentTime, isError, updateTimeHandler } = useUpdateTime(
    restSessionTime,
    setRestSessionTime,
  );

  return (
    <SettingsItem title="Rest time" description="Set a value from 1 to 60" isError={isError}>
      <Input placeholder="15" value={currentTime} onChange={updateTimeHandler} />
    </SettingsItem>
  );
};

export default UpdateWorkTime;
