import { useState } from 'react';
import { useSettingsStore, SettingsStorage } from '../../../entities/Settings';
import { isValidSessions } from '../../../shared/utils';

export const useUpdateSessionPerDay = () => {
  const sessionPerDay = useSettingsStore((state) => state.sessionPerDay);
  const setSessionPerDay = useSettingsStore((state) => state.setSessionPerDay);

  const [sessions, setSessions] = useState<string>(sessionPerDay.toString());
  const [isError, setIsError] = useState<boolean>(false);

  const updateSessionsHandler = (count: string) => {
    const actualCount = Math.floor(Number(count));

    if (!isValidSessions(actualCount) || Number.isNaN(actualCount)) {
      setIsError(true);
    } else {
      setIsError(false);
      setSessionPerDay(actualCount);
      SettingsStorage.setSessionPerDay(actualCount);
    }

    setSessions(count);
  };

  return { sessions, isError, updateSessionsHandler };
};
