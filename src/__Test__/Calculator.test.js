import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Calculator from '../components/Calculator';

test('renders correctly', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});

//

test('should display the number click on the calculator button to the screen', async () => {
  const { getByTestId, getByText } = render(<Calculator />);
  fireEvent.click(getByText('4'));
  const lot = getByTestId('screen');

  expect(lot.textContent).toBe('4');
});
