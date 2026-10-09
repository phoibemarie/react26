
import './App.css'

function App() {

  const toDoList = [ 
    {id: 1, title: "Review resources"},
    {id: 2, title: "Take notes"},
    {id: 3, title: "Code out app"},
  ];
 
  //create an unordered list of the toDoList items using the map method
  //the map method will return an array of <li> elements that will be rendered in the <ul> element. it will take a function as an argument/paramter. variable.map(function(variable) { return <li>variable</li> })
       //the key prop is used to give each <li> element a unique identifier, which helps React keep track of the elements when they are updated or removed
       // the curly braces are used to embed JavaScript expressions within JSX, allowing us to dynamically generate the list items based on the toDoList array. its like string interpolation in other programming languages, but for JSX.
       //task is the parameter that represents each item in the toDoList array as it is being iterated over using the map method. it can be named anything, but it indicates each individual task. we can also access  values associated with the keys (properties) in each object. example: task.id, task.title
        
  return (
    <div>
      <h1>Daily Planner!</h1>
      <ul>
        {toDoList.map(task => <li key = {task.id}>{task.title}</li>)}   
      </ul>
    </div>
  )
}

export default App
