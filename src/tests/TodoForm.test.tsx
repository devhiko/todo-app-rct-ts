import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoForm } from "../components/TodoForm";

describe("TodoForm test", () => {
  it("should render todo form everytime", () => {
    const mocksetTodos = jest.fn();
    const { getByTitle, getByPlaceholderText, getByDisplayValue } = render(<TodoForm setTodos={mocksetTodos} />);

    const els = [getByTitle(/form/i), getByPlaceholderText(/what should/i), getByDisplayValue(/add todo/i)];
    els.forEach((el) => expect(el).toBeInTheDocument());
  });

  it("should call setTodos when typed on input", async () => {
    const user = userEvent.setup();

    const mocksetTodos = jest.fn();
    const { getByPlaceholderText } = render(<TodoForm setTodos={mocksetTodos} />);

    const input = getByPlaceholderText(/what should/i);
    await user.click(input);
    await user.type(input, "value");
    expect(input).toHaveValue("value");
  });

  it("should type the form input", async () => {
    const user = userEvent.setup();

    const mocksetTodos = jest.fn();
    const { getByPlaceholderText } = render(<TodoForm setTodos={mocksetTodos} />);

    const input = getByPlaceholderText(/what should/i);
    await user.click(input);
    await user.type(input, "test");
    expect(input).toHaveValue("test");
  });

  it("should clear input after todo added with click add btn", async () => {
    const user = userEvent.setup();

    const mocksetTodos = jest.fn();
    const { getByPlaceholderText, getByDisplayValue } = render(<TodoForm setTodos={mocksetTodos} />);

    const input = getByPlaceholderText(/what should/i);
    const btn = getByDisplayValue(/add todo/i);
    await user.click(input);
    await user.type(input, "test");
    await user.click(btn);
    expect(input).toHaveValue("");
  });
});
