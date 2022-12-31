import { render, screen } from "@testing-library/react";
import { TodoForm } from "../components/TodoForm";
describe("TodoForm test", () => {
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
});
