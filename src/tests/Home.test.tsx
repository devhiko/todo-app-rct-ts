import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import TodoForm from "../components/TodoForm";

describe("Home test", () => {
  it("should render Home", () => {
    render(<Home />);
    screen.debug();
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
});
