import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should delete todo when clicked", async () => {
    const user = userEvent.setup();

    const mockTodos = [
      { name: "test", id: "0" },
      { name: "jesst", id: "1" },
      { name: "mest", id: "2" },
    ];
    const mocksetTodos = jest.fn();
    const { queryByText, rerender, debug } = render(<TodoList todos={mockTodos} setTodos={mocksetTodos} />, {});

    const todoItem = queryByText(/mest/i);
    todoItem && (await user.click(todoItem));
    rerender(
      <TodoList
        todos={[
          { name: "test", id: "0" },
          { name: "jesst", id: "1" },
        ]}
        setTodos={mocksetTodos}
      />
    );
    debug();
    await waitFor(() => expect(todoItem).not.toBeInTheDocument());

    expect(mocksetTodos).toHaveBeenCalledTimes(1);
  });
});
