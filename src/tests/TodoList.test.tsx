import { render, screen } from "@testing-library/react";
import { TodoList } from "../components/TodoList";

describe("TodoList test", () => {
  it("should render TodoList", () => {
    const mockTodos = [{ name: "", id: "" }];
    const mocksetTodos = jest.fn();
    render(<TodoList todos={mockTodos} setTodos={mocksetTodos} />);
  });

  it("should render todo header", () => {
    const mockTodos = [{ name: "", id: "" }];
    const mocksetTodos = jest.fn();
    render(<TodoList todos={mockTodos} setTodos={mocksetTodos} />);

    const todoheader = screen.getByText(/^Todos$/);
    expect(todoheader).toBeInTheDocument();
  });

  it("should render todos when added", () => {
    const mockTodos = [
      { name: "test", id: "0" },
      { name: "jesst", id: "1" },
      { name: "mest", id: "2" },
    ];
    const mocksetTodos = jest.fn();
    render(<TodoList todos={mockTodos} setTodos={mocksetTodos} />);

    const todoItems = screen.getAllByTitle(/todo/i);
    todoItems.forEach((item, i) => expect(item).toHaveTextContent(mockTodos[i]["name"]));
    expect(todoItems).toHaveLength(mockTodos.length);
  });
});
