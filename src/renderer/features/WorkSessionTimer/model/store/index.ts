import { create } from 'zustand';

interface WorkSessionTimerState {
  isStopped: boolean;
  isEnd: boolean;
  resetKey: number;
  completeWorkSession: () => void;
  pauseWorkSession: () => void;
  continueWorkSession: () => void;
  resetWorkSession: () => void;
}

export const useWorkSessionTimerStore = create<WorkSessionTimerState>()((set) => ({
  isStopped: true,
  isEnd: false,
  resetKey: 0,
  completeWorkSession: () =>
    set((state) => ({
      ...state,
      isEnd: true,
    })),
  pauseWorkSession: () =>
    set((state) => ({
      ...state,
      isStopped: true,
    })),
  continueWorkSession: () =>
    set((state) => ({
      ...state,
      isStopped: false,
    })),
  resetWorkSession: () =>
    set((state) => ({
      ...state,
      isEnd: false,
      isStopped: false,
      resetKey: state.resetKey + 1,
    })),
}));
