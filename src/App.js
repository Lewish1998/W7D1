import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDoList, setTodo] = useState([
    {name: 'Add Priority', priority: 'low', completed: false}
  ])


  const[newToDo, setNewToDo] = useState('')
  const[priority, setPriority] = useState('')


  const completeToDo = (index) => {
    const copyToDo = [...toDoList]
    const updatedToDo = {...copyToDo[index]}
    updatedToDo.completed = true
    copyToDo[index] = updatedToDo
    setTodo(copyToDo)
  }


  const toDoNodes = toDoList.map((todo, index) => {
    return (
      <li id='list-item' key={index}>{todo.name}
      <p>{todo.priority}</p>
      {todo.completed ? <span>Completed!</span> :
      <button onClick={()=>completeToDo(index)} htmlId='complete-button'>Complete</button>}</li> 
    )
  })


  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const setHigh = () => {
    setPriority('High')
  }
  const setLow = () => {
    setPriority('Low')
  }



  const saveNewToDO = (event) => {
    event.preventDefault()
    const copyToDo = [...toDoList];
    copyToDo.push({name:newToDo, priority:priority, completed:false})
    setTodo(copyToDo)
    setNewToDo('')
  }



  return (
    <div className="App">
      <h1 id='heading'>ToDo List</h1>
      <ul>
        <div id='todo'>
      {toDoNodes}
      </div>
      </ul>

    <form id='form' onSubmit={saveNewToDO}>
      <div id='form-box'>
      <label htmlFor='new-todo'>Add new ToDo:</label>
      <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput} required/>

      <div id='priority'>
        <label>Priority </label>
        <label for='high'>High</label>
        <input type='radio' name='priority' id='high' value='high' onChange={setHigh} required/>
        <label for='high'>low</label>
        <input type='radio' name='priority' id='low' value='low' onChange={setLow} required/>
      </div>
      <input type='submit' value='Save New ToDo'></input>
      </div>
    </form>

  </div>
  );
}

export default App;
