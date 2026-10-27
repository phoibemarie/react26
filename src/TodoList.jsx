import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem 
        key={todo.id}       //The key prop is a special attribute that helps React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
        todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;