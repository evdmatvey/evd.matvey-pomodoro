import {
  SettingsItem,
  useSettingsStore,
  useUpdateTime,
  SettingsStorage,
} from '../../../entities/Settings';
import { Input } from '../../../shared/UI';

const UpdateWorkTime = () => {
  const workSessionTime = useSettingsStore((state) => state.workSessionTime);
  const setWorkSessionTime = useSettingsStore((state) => state.setWorkSessionTime);

  const updateWorkTimeCallback = (time: number) => {
    setWorkSessionTime(time);
    SettingsStorage.setWorkSessionTime(time);
  };

  const { currentTime, isError, updateTimeHandler } = useUpdateTime(
    workSessionTime,
    updateWorkTimeCallback,
  );

  return (
    <SettingsItem title="Work time" description="Set a value from 1 to 60" isError={isError}>
      <Input placeholder="45" value={currentTime} onChange={updateTimeHandler} />
    </SettingsItem>
  );
};

export default UpdateWorkTime;
