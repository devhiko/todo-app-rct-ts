import { render, screen } from "@testing-library/react";
import { TodoForm } from "../components/TodoForm";

describe("TodoForm test", () => {
  it("should render todo form everytime", () => {
    const mocksetTodos = jest.fn();
    render(<TodoForm setTodos={mocksetTodos} />);

    const els = [
      screen.getByTitle(/form/i),
      screen.getByPlaceholderText(/what should/i),
      screen.getByDisplayValue(/add todo/i),
    ];
    els.forEach((el) => expect(el).toBeInTheDocument());
  });
});
