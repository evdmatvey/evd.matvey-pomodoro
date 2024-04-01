import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PauseIcon } from '../icons';

test('PauseIcon snapshot', () => {
  const pauseIcon = render(<PauseIcon />);
  expect(pauseIcon).toMatchSnapshot();
});
