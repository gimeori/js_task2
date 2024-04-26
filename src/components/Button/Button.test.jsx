import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button increases x when clicked', () => {
  const { getByText } = render(<Button />);
  const button = getByText(/Click me to increase x/);

  expect(button).toBeTruthy();
  expect(button.textContent).toBe('Click me to increase x: 0');

  fireEvent.click(button);

  expect(button.textContent).toBe('Click me to increase x: 1');
});
