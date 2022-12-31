import "../styles/TodoForm.css";
import React, { useState } from "react";
import { Todo } from "./Home";
import { v1 } from "uuid";

// todo form props
interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoForm = ({ setTodos }: TodoFormProps) => {
  // todo item state
  const [todoItem, setTodoItem] = useState("");

  // submit evt
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos((prev) => [
      ...prev,
      {
        name: todoItem,
        id: v1(),
      },
    ]);
    setTodoItem("");
  };
  return (
    <form title="form" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTodoItem(e.target.value)}
        id="td"
        value={todoItem}
        required
        placeholder="What should be done"
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
