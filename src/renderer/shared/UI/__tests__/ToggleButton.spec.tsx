import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ToggleButton } from '../';

test('ToggleButton snapshot', () => {
  const toggleButton = render(<ToggleButton />);
  expect(toggleButton).toMatchSnapshot();
});
