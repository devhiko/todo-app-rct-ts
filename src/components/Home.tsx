import '../styles/Home.css'
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// todo data
export interface Todo {
  name: string
  id: string
}

const Home = () => {

  // todo state
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="Home">
      {todos.length ?
        <TodoList todos={todos} setTodos={setTodos} />
        :
        <p style={{ color: 'wheat' }}>No Todos, have fun !</p>}
      <TodoForm setTodos={setTodos} />
    </div>
  );
}

export default Home;