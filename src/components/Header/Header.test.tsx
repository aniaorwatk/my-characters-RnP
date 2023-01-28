import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header with title', () => {
    render(< Header />);

    const title = screen.getByText("MY CHARACTERS IN PEN AND PAPER GAMES");

    expect(title).toBeInTheDocument();
});


test('renders snapshot', () => {
    render(< Header />);

    const title = screen.getByText("MY CHARACTERS IN PEN AND PAPER GAMES");

    expect(title).toMatchSnapshot();
});