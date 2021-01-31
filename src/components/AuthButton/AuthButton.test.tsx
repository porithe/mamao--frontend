import React from 'react';
import { render } from '@testing-library/react';
import AuthButton from './AuthButton';

test('should render correct name from prop', () => {
  const { getByText } = render(
    <AuthButton name="Sing up" isMain />,
  );
  expect(getByText('Sing up')).toBeTruthy();
});
