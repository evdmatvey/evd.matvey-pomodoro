import { create } from 'zustand';
import type { Theme } from '../types';

interface themeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<themeState>()((set) => ({
  theme: 'light',
  setTheme: (theme: Theme) =>
    set((state) => ({
      theme,
    })),
}));
