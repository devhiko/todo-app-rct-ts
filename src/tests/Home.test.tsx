import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../components/Home";
import { TodoForm } from "../components/TodoForm";

describe("Home test", () => {
  it("should render Home", () => {
    render(<Home />);
  });

  it("should have home classname", () => {
    render(<Home />);
    const home = screen.getByTitle("home");
    expect(home).toHaveClass("Home");
  });

  it("should render todo form everytime", () => {
    const mocksetTodos = jest.fn();
    render(<TodoForm setTodos={mocksetTodos} />);

    const form = screen.getByTitle(/form/i);
    expect(form).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/what should/i);
    expect(input).toBeInTheDocument();

    const btn = screen.getByDisplayValue(/add todo/i);
    expect(btn).toBeInTheDocument();
  });

  it("should render no todos text when no todos", () => {
    render(<Home />);
    const todotext = screen.getByText(/no todos/i);
    expect(todotext).toBeInTheDocument();
  });

  // * integration tests
  it("should add todo when typed and clicked add btn", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const input = screen.getByPlaceholderText(/what should.../i);
    const btn = screen.getByDisplayValue(/add todo/i);
    await user.type(input, "do something");
    await user.click(btn);

    const inputEl = screen.getByPlaceholderText(/what should/i);
    expect(inputEl).toHaveValue("");

    const item = screen.getByText(/do some/i);
    expect(item).toBeInTheDocument();
  });
});
