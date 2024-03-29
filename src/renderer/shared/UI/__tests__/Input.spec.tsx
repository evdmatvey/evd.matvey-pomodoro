import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Input } from '../';

test('Input snapshot', () => {
  const input = render(<Input placeholder="Input" />);
  expect(input).toMatchSnapshot();
});
