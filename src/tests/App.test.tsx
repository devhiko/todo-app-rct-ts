/* eslint-disable jest/expect-expect */
import { render } from "@testing-library/react";
import { App } from "../App";

describe("App test", () => {
  it("should render app", () => {
    render(<App />);
  });

  it("should have app classname", () => {
    const { getByTitle } = render(<App />);
    const app = getByTitle("app");
    expect(app).toHaveClass("App");
  });

  it("should render todo header", () => {
    const { getByRole } = render(<App />);

    const hel = getByRole("heading");
    expect(hel).toBeInTheDocument();
    expect(hel).toHaveTextContent(/^Todo App$/);
  });
});
