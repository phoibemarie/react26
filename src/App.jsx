
import TodoList from "./TodoList";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  // Add a new todo
  const addTodo = (todoTitle) => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false
    };

    setTodoList(previous => [newTodo, ...previous]);
  };

  // Mark a todo as completed
  const completeTodo = (id) => {
    setTodoList(previous =>
      previous.map(todo =>
        todo.id === id
          ? { ...todo, isCompleted: true }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
      />
    </div>
  );
}

export default App;


//What's happening?

// todos is your original array of objects. useState(todos) initializes React state using that array.

// todoList is the current state value, and setTodoList is the function you'll eventually use to update it.

// <TodoList todoList={todoList} /> passes the current state to the child component.