import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

test('should render correct text in home view', () => {
  const { getByText } = render(
    <Router>
      <Home />
    </Router>,
  );
  expect(getByText('Join mamao today!')).toBeTruthy();
  expect(getByText('See what’s happen’ in the world right now!')).toBeTruthy();
});

test('should render two auth links', () => {
  const { getByText } = render(
    <Router>
      <Home />
    </Router>,
  );
  expect(getByText('Sing up')).toBeTruthy();
  expect(getByText('Log in')).toBeTruthy();
});
