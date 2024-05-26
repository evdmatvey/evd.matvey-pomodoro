import {
  SettingsItem,
  useSettingsStore,
  useUpdateTime,
  SettingsStorage,
} from '../../../entities/Settings';
import { Input } from '../../../shared/UI';

const UpdateWorkTime = () => {
  const restSessionTime = useSettingsStore((state) => state.restSessionTime);
  const setRestSessionTime = useSettingsStore((state) => state.setRestSessionTime);

  const updateRestTimeCallback = (time: number) => {
    setRestSessionTime(time);
    SettingsStorage.setRestSessionTime(time);
  };

  const { currentTime, isError, updateTimeHandler } = useUpdateTime(
    restSessionTime,
    updateRestTimeCallback,
  );

  return (
    <SettingsItem title="Rest time" description="Set a value from 1 to 60" isError={isError}>
      <Input placeholder="15" value={currentTime} onChange={updateTimeHandler} />
    </SettingsItem>
  );
};

export default UpdateWorkTime;
