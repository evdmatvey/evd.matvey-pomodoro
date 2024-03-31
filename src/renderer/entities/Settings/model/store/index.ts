import { create } from 'zustand';

interface SettingsState {
  workSessionTime: number;
  restSessionTime: number;
  sessionPerDay: number;
  setWorkSessionTime: (time: number) => void;
  setRestSessionTime: (time: number) => void;
  setSessionPerDay: (count: number) => void;
}

const SUM_REST_AND_WORK_TIME = 60;

export const useSettingsStore = create<SettingsState>()((set) => ({
  workSessionTime: 45,
  restSessionTime: 15,
  sessionPerDay: 10,
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
