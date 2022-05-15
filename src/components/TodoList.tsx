import { Todo } from "./Home"

interface TodoListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {

  const handleDelete = (id: string) => {
    const deletedTodo = todos.filter(todo => todo.id !== id);

    setTodos(deletedTodo);
  }

  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) =>
          <li
            onClick={() => handleDelete(todo.id)}
            key={todo.id}>
            {todo.name}
          </li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;