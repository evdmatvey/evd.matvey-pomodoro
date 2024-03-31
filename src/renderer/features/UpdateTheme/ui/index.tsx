import { SettingsItem } from '../../../entities/Settings';
import { ToggleButton } from '../../../shared/UI';
import { useUpdateTheme } from '../hooks/useUpdateTheme';

const UpdateTheme = () => {
  const { changeThemeHandler, theme } = useUpdateTheme();

  return (
    <SettingsItem title="Dark theme" description="Choose the theme of the app" isError={false}>
      <ToggleButton onChange={changeThemeHandler} checked={theme === 'dark'} />
    </SettingsItem>
  );
};

export default UpdateTheme;
