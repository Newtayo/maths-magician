import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Addquote from '../components/Addquote';

test('renders correctly', () => {
    const { asFragment } = render(<Addquote />);
    expect(asFragment()).toMatchSnapshot();
});

//

test('should display the number click on the calculator button to the screen', async () => {
    const { getByText } = render(<Addquote />)
    expect(getByText("Loading...")).toBeInTheDocument()
});
