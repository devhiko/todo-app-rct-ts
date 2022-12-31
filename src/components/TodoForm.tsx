import "../styles/TodoForm.css";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { type Todo } from "./Home";
import { v1 as uid } from "uuid";

export const TodoForm = ({ setTodos }: { setTodos: Dispatch<SetStateAction<Todo[]>> }) => {
  // todo item state
  const [todoItem, setTodoItem] = useState("");
  // submit evt
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { name: todoItem, id: uid() }]);
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
