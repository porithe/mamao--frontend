import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('should render correct text in header link', () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>,
  );

  expect(getByText('Mamao')).toBeTruthy();
});
