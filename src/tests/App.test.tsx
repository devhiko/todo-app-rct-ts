import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App test", () => {
  it("should render app", () => {
    render(<App />);
  });

  it("should have app classname", () => {
    render(<App />);
    const app = screen.getByTitle("app");
    expect(app).toHaveClass("App");
  });

  it("should render todo header", () => {
    render(<App />);
    const hel = screen.getByRole("heading");
    expect(hel).toBeInTheDocument();
    expect(hel).toHaveTextContent(/^Todo App$/);
  });
});
