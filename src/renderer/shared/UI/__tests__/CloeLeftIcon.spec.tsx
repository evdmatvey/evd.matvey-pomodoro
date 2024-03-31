import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CloseLeftIcon } from '../icons';

test('CloseLeftIcon snapshot', () => {
  const closeLeftIcon = render(<CloseLeftIcon />);
  expect(closeLeftIcon).toMatchSnapshot();
});
