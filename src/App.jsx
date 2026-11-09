
import { useState } from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };

    setTodoList(previous => [newTodo, ...previous]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

//What's happening?

// todos is your original array of objects. useState(todos) initializes React state using that array.

// todoList is the current state value, and setTodoList is the function you'll eventually use to update it.

// <TodoList todoList={todoList} /> passes the current state to the child component.