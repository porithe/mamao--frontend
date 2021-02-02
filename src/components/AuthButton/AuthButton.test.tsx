import React from 'react';
import { render } from '@testing-library/react';
import AuthButton from './AuthButton';

const callback = () => {};

test('should render correct name from prop', () => {
  const { getByText } = render(<AuthButton name="Sing up" isMain callback={callback} />);
  expect(getByText('Sing up')).toBeTruthy();
});
