import { useEffect } from 'react';
import { useThemeStore } from '../model/store';

export const useUpdateTheme = () => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  const changeThemeHandler = async () => {
    //@ts-ignore
    const isDarkMode = await window.darkMode.toggle();
    setTheme(isDarkMode ? 'dark' : 'light');
  };

  return { theme, changeThemeHandler };
};
