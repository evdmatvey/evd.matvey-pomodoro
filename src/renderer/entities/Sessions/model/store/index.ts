import { create } from 'zustand';

interface SessionsState {
  currentSessionState: 'work' | 'rest';
  completedSessionCount: number;
  isAllSessionCompleted: boolean;
  setRestSession: () => void;
  completeCurrentSession: () => void;
  setCompletedSessionCount: (value: number) => void;
  setAllSessionCompleted: (value: boolean) => void;
}

export const useSessionsStore = create<SessionsState>()((set) => ({
  currentSessionState: 'work',
  completedSessionCount: 0,
  isAllSessionCompleted: false,
  setRestSession: () =>
    set((state) => ({
      ...state,
      currentSessionState: 'rest',
    })),
  completeCurrentSession: () =>
    set((state) => ({
      ...state,
      currentSessionState: 'work',
      completedSessionCount: state.completedSessionCount + 1,
    })),
  setCompletedSessionCount: (value: number) =>
    set((state) => ({
      ...state,
      completedSessionCount: value,
    })),
  setAllSessionCompleted: (value: boolean) =>
    set((state) => ({
      ...state,
      isAllSessionCompleted: value,
    })),
}));
