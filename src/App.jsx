
import TodoList from "./TodoList";
import TodoForm from './TodoForm.jsx';
import {useState} from 'react'; //importing the hook feature, functional components that are standalone functions 


 

//Lesson 3 - we transferred the todoList object variable into the App JSX and renamed it to todos 
 const todos= [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Practice JSX" },
    { id: 3, title: "Build a Todo App" }
  ];


function App() {

  const [todoList, settoDoList] = useState(todos);  //Use array destructuring to access the state value (todoList) and its accompanying state update function (setTodoList).

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todoList = {todoList}/>
      <TodoForm/>
    </div>
  );
}

export default App;

//What's happening?

// todos is your original array of objects. useState(todos) initializes React state using that array.

// todoList is the current state value, and setTodoList is the function you'll eventually use to update it.

// <TodoList todoList={todoList} /> passes the current state to the child component.