import { useEffect, useState } from 'react';
import { isValidTime } from '../../../shared/utils';

export const useUpdateTime = (time: number, setTimeCallback: (time: number) => void) => {
  const [currentTime, setCurrentTime] = useState<string>(time.toString());
  const [isError, setIsError] = useState<boolean>(false);

  const updateTimeHandler = (newTime: string) => {
    const actualTime = Math.floor(Number(newTime));

    if (!isValidTime(actualTime) || Number.isNaN(actualTime)) {
      setIsError(true);
    } else {
      setIsError(false);
      setTimeCallback(actualTime);
    }

    setCurrentTime(newTime);
  };

  useEffect(() => {
    setCurrentTime(time.toString());
  }, [time]);

  return { currentTime, isError, updateTimeHandler };
};
