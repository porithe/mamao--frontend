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

  expect(getByText('Start using mamao today!')).toBeTruthy();
});
