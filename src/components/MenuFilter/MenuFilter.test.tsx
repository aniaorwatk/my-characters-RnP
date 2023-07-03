import { render, screen } from "@testing-library/react";
import MenuFilter from "./MenuFilter";

test("renders MenuFilter with search box", () => {
  render(
    <MenuFilter searchBox={<div>search box</div>} btnBox={<div>xxxxx</div>} />
  );

  const searchBox = screen.getByText("search box");

  expect(searchBox).toBeInTheDocument();
});

test("renders MenuFilter with button", () => {
  render(
    <MenuFilter
      searchBox={<div>search box</div>}
      btnBox={<button>button</button>}
    />
  );

  const searchBox = screen.getByText("button");

  expect(searchBox).toBeInTheDocument();
});

test("renders snapshot", () => {
  const view = render(
    <MenuFilter searchBox={<div>xxxxx</div>} btnBox={<div>xxxxx</div>} />
  );

  expect(view.baseElement).toMatchSnapshot();
});
