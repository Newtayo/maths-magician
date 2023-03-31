import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Navigation from '../components/Navigation';

test('renders correctly', () => {
  const { asFragment } = render(<Navigation />);
  expect(asFragment()).toMatchSnapshot();
});

//

test('should display the the content of the nav links', async () => {
  const { getByText } = render(<Navigation />);
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Calculator')).toBeInTheDocument();
  expect(getByText('Quote')).toBeInTheDocument();
});
