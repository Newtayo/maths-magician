import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Navigation from '../components/Navigation';

test('renders correctly', () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
});

//

test('should display the number click on the calculator button to the screen', async () => {
    const { getByTestId, getByText } = render(<Navigation />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Calculator")).toBeInTheDocument();
    expect(getByText("Quote")).toBeInTheDocument();
});
