import { SettingsItem, useSettingsStore, useUpdateTime } from '../../../entities/Settings';
import { Input } from '../../../shared/UI';

const UpdateWorkTime = () => {
  const workSessionTime = useSettingsStore((state) => state.workSessionTime);
  const setWorkSessionTime = useSettingsStore((state) => state.setWorkSessionTime);

  const { currentTime, isError, updateTimeHandler } = useUpdateTime(
    workSessionTime,
    setWorkSessionTime,
  );

  return (
    <SettingsItem title="Work time" description="Set a value from 1 to 60" isError={isError}>
      <Input placeholder="45" value={currentTime} onChange={updateTimeHandler} />
    </SettingsItem>
  );
};

export default UpdateWorkTime;
