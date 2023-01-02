import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../components/Home";
import { TodoForm } from "../components/TodoForm";

describe("Home test", () => {
  it("should render Home", () => {
    render(<Home />);
  });

  it("should have home classname", () => {
    const { getByTitle } = render(<Home />);
    const home = getByTitle("home");
    expect(home).toHaveClass("Home");
  });

  it("should render todo form everytime", () => {
    const mocksetTodos = jest.fn();
    const { getByTitle, getByPlaceholderText, getByDisplayValue } = render(<TodoForm setTodos={mocksetTodos} />);

    const form = getByTitle(/form/i);
    expect(form).toBeInTheDocument();

    const input = getByPlaceholderText(/what should/i);
    expect(input).toBeInTheDocument();

    const btn = getByDisplayValue(/add todo/i);
    expect(btn).toBeInTheDocument();
  });

  it("should render no todos text when no todos", () => {
    const { getByText } = render(<Home />);
    const todotext = getByText(/no todos/i);
    expect(todotext).toBeInTheDocument();
  });

  // * integration tests
  it("should add todo when typed and clicked add btn", async () => {
    const user = userEvent.setup();
    const { getByPlaceholderText, getByDisplayValue, getByText } = render(<Home />);

    const input = getByPlaceholderText(/what should.../i);
    const btn = getByDisplayValue(/add todo/i);
    await user.type(input, "do something");
    await user.click(btn);

    const inputEl = getByPlaceholderText(/what should/i);
    expect(inputEl).toHaveValue("");

    const item = getByText(/do some/i);
    expect(item).toBeInTheDocument();
  });
});
