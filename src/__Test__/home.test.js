import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Home from '../components/Home';

test('renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
});

//

test('should display the number click on the calculator button to the screen', async () => {
    const { getByText } = render(<Home />)
    expect(getByText("Welcome to Our Page!")).toBeInTheDocument()
});
