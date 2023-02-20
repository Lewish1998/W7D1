import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDoList, setTodo] = useState([
  ])


  const[newToDo, setNewToDo] = useState('')


  const completeToDo = (index) => {
    const copyToDo = [...toDoList]
    const updatedToDo = {...copyToDo[index]}
    updatedToDo.completed = true
    copyToDo[index] = updatedToDo
    setTodo(copyToDo)
  }


  const toDoNodes = toDoList.map((todo, index) => {
    return (
      <li key={index}>{todo.name}
      {todo.completed ? <span>Completed!</span> :
      <button onClick={()=>completeToDo(index)}>Complete</button>}</li> // REMEBER TO ADD BUTTON FUNCTION
    )
  })


  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }


  const saveNewToDO = (event) => {
    event.preventDefault()
    const copyToDo = [...toDoList];
    copyToDo.push({name:newToDo, completed:false})
    setTodo(copyToDo)
    setNewToDo('')
  }



  return (
    <div className="App">
      <h1 htmlId='heading'>ToDo List</h1>
      <ul>

      </ul>
        {toDoNodes}

    <form onSubmit={saveNewToDO}>
      <label htmlFor='new-todo'>Add new ToDo:</label>
      <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput}/>
      <input type='submit' value='Save New ToDo'></input>
    </form>

  </div>
  );
}

export default App;
