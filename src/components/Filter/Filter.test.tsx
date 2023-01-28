import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

test('when click button "all Characters" function is called', () => {
    const mock = jest.fn();
    render(<Filter setFilterCharacters={mock} query={""}  />);

    const filterButtonAllCharacters = screen.getByText(/All Characters/i);
    filterButtonAllCharacters.click();

    expect(mock).toBeCalled();
});
