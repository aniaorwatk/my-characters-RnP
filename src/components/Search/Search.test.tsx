import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('checks if input exists', () => {
    render(< Search searchCharacter={() => { }} query={''} />);

    const input = screen.getByPlaceholderText("Find Character...");

    expect(input).toBeInTheDocument();
});

test('input has query value', () => {
    render(< Search searchCharacter={() => { }} query={'luna'} />);

    const input = screen.getByPlaceholderText("Find Character...") as HTMLInputElement;

    expect(input.value).not.toEqual("xxxx");
    expect(input.value).toEqual("luna");
});

test('when writing word in input function has been called', () => {
    const mock = jest.fn();
    render(< Search searchCharacter={mock} query={''} />);

    const input = screen.getByPlaceholderText("Find Character...");
    fireEvent.change(input, { target: { value: "luna" } });

    expect(mock).toBeCalled();
});
