import { create } from 'zustand';
import { SettingsStorage } from '../../utils/SettingsStorage';

interface SettingsState {
  workSessionTime: number;
  restSessionTime: number;
  sessionPerDay: number;
  setWorkSessionTime: (time: number) => void;
  setRestSessionTime: (time: number) => void;
  setSessionPerDay: (count: number) => void;
}

const SUM_REST_AND_WORK_TIME = 60;
const WORK_SESSION_TIME = SettingsStorage.getWorkSessionTime();
const REST_SESSION_TIME = SettingsStorage.getRestSessionTime();
const SESSIONS_PER_DAY = SettingsStorage.getSessionPerDay();

export const useSettingsStore = create<SettingsState>()((set) => ({
  workSessionTime: WORK_SESSION_TIME,
  restSessionTime: REST_SESSION_TIME,
  sessionPerDay: SESSIONS_PER_DAY,
  setWorkSessionTime: (time) =>
    set((state) => ({
      ...state,
      workSessionTime: time,
      restSessionTime: SUM_REST_AND_WORK_TIME - time,
    })),
  setRestSessionTime: (time) =>
    set((state) => ({
      ...state,
      restSessionTime: time,
      workSessionTime: SUM_REST_AND_WORK_TIME - time,
    })),
  setSessionPerDay: (count) =>
    set((state) => ({
      ...state,
      sessionPerDay: count,
    })),
}));
