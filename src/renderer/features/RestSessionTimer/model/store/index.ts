import { create } from 'zustand';

interface RestSessionTimerState {
  isStopped: boolean;
  isEnd: boolean;
  completeRestSession: () => void;
  pauseRestSession: () => void;
  continueRestSession: () => void;
  resetRestSession: () => void;
}

export const useRestSessionTimerStore = create<RestSessionTimerState>()((set) => ({
  isStopped: false,
  isEnd: false,
  completeRestSession: () =>
    set((state) => ({
      ...state,
      isEnd: true,
    })),
  pauseRestSession: () =>
    set((state) => ({
      ...state,
      isStopped: true,
    })),
  continueRestSession: () =>
    set((state) => ({
      ...state,
      isStopped: false,
    })),
  resetRestSession: () =>
    set((state) => ({
      ...state,
      isEnd: false,
      isStopped: false,
    })),
}));
