import { type Todo } from "./Home";

export const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  // delete evt
  const handleDelete = (id: string) => () => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li title="todo" onClick={handleDelete(todo.id)} key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
