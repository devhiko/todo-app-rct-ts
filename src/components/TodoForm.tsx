import '../styles/TodoForm.css'
import { useState } from 'react'
import { v1 } from 'uuid'

const TodoForm = ({ setTodos }) => {
  const [todoItem, setTodoItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = todoItem;
    setTodos((prevTodos) => [...prevTodos, { name: newTodo, id: v1() }]);
    setTodoItem('');
  }
  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        id='td'
        type="text"
        required
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        placeholder="What should be done" />
      <input
        type="submit"
        value="Add Todo" />
    </form>
  );
}

export default TodoForm;