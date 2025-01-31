import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState([])
  const deyis = (e) => {
    setInputValue(e.target.value)
  }

  const addTodo = () => {
    if (inputValue.trim() != '') {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  const deleteTodo = (index) => {
     const newTodos = todos.filter((todo, i) => i !== index)
     setTodos(newTodos);
  }

  return (
    <>

    
    <input 
    type="text" 
    value={inputValue}
    onChange={deyis}
    placeholder='Yeni Tapsiriq Elave Et'
    />
    <button onClick={addTodo}>Elave Et</button>
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
           {todo}
          <button onClick={() =>deleteTodo(index)} style={{marginLeft: '40px'}}>Sil</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
