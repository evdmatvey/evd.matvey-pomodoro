import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../';

test('Button snapshot', () => {
  const button = render(<Button color="accent">Button</Button>);
  expect(button).toMatchSnapshot();
});
