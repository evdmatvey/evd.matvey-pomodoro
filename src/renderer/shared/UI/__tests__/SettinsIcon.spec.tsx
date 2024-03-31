import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SettingsIcon } from '../icons';

test('SettingsIcon snapshot', () => {
  const settingsIcon = render(<SettingsIcon />);
  expect(settingsIcon).toMatchSnapshot();
});
