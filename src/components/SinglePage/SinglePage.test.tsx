import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SinglePage from "./SinglePage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));

it("renders snapshot", () => {
  const view = render(
    <MemoryRouter>
      <SinglePage />
    </MemoryRouter>
  );

  expect(view.baseElement).toMatchSnapshot();
});
