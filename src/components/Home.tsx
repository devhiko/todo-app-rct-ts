import "../styles/Home.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

// todo data
export type Todo = { name: string; id: string };

export const Home = () => {
  // todo state
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div title="home" className="Home">
      <TodoForm setTodos={setTodos} />
      {todos.length ? (
        <TodoList todos={todos} setTodos={setTodos} />
      ) : (
        <p style={{ color: "wheat" }}>No Todos, have fun !</p>
      )}
    </div>
  );
};
