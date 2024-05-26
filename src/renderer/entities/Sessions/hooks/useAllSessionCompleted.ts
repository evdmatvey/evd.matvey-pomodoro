import { useEffect, useState } from 'react';
import { useSettingsStore, SettingsStorage } from '../../../entities/Settings';
import { useSessionsStore } from '../model/store';

export const useAllSessionCompleted = () => {
  const completedSessionCount = useSessionsStore((store) => store.completedSessionCount);
  const setAllSessionCompleted = useSessionsStore((store) => store.setAllSessionCompleted);
  const isAllSessionCompleted = useSessionsStore((store) => store.isAllSessionCompleted);
  const setCompletedSessionCount = useSessionsStore((store) => store.setCompletedSessionCount);
  const completeCurrentSession = useSessionsStore((store) => store.completeCurrentSession);
  const sessionPerDay = useSettingsStore((store) => store.sessionPerDay);

  useEffect(() => {
    if (sessionPerDay <= completedSessionCount) setAllSessionCompleted(true);
  }, [sessionPerDay, completedSessionCount]);

  const resetSessions = () => {
    setAllSessionCompleted(false);
    completeCurrentSession();
    setCompletedSessionCount(0);
    SettingsStorage.setCompletedSessions(0);
  };

  return { isAllSessionCompleted, resetSessions };
};
