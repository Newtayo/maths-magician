import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Addquote from '../components/Addquote';

test('renders correctly', () => {
  const { asFragment } = render(<Addquote />);
  expect(asFragment()).toMatchSnapshot();
});

//

test('should check if the content is loading', async () => {
  const { getByText } = render(<Addquote />);
  expect(getByText('Loading...')).toBeInTheDocument();
});
