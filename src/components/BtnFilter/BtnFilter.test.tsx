import { render, screen } from '@testing-library/react';
import BtnFilter from './BtnFilter';

test('renders Btn Filter', () => {
    render(<BtnFilter labelBtn='All Characters' onClick={function (): void {
        throw new Error('Function not implemented.');
    }} btnColor='yellow' />);

    const filterButtonElement = screen.getByText(/All Characters/i);

    expect(filterButtonElement).toBeInTheDocument();
});

test('render snapshot', () => {
    render(<BtnFilter labelBtn='All Characters' onClick={function (): void {
        throw new Error('Function not implemented.');
    }} btnColor='yellow' />);

    const filterButtonElement = screen.getByText(/All Characters/i);

    expect(filterButtonElement).toMatchSnapshot();
});

test('when click button function been called', () => {
    const mock = jest.fn();
    render(<BtnFilter labelBtn='All Characters' onClick={mock} btnColor='yellow' />);

    const filterButtonElement = screen.getByText(/All Characters/i);
    filterButtonElement.click();

    expect(mock).toBeCalled();
});