import { create } from 'zustand';

interface WorkSessionTimerState {
  isStopped: boolean;
  isEnd: boolean;
  completeWorkSession: () => void;
  pauseWorkSession: () => void;
  continueWorkSession: () => void;
  resetWorkSession: () => void;
}

export const useWorkSessionTimerStore = create<WorkSessionTimerState>()((set) => ({
  isStopped: true,
  isEnd: false,
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
    })),
}));
