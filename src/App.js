import React, { useState, useEffect } from 'react';
import "./App.css"
import Form from './components/Form';
import TodoList from './components/TodoList';
function App(props) {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.complated === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.complated === false))
        break;
    
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  useEffect(()=>{
    filterHandler()
  }, [status, todos])

  return (
    <div className='App'>
      <header>
        <h1>React Todo List</h1>
      </header>
      <Form 
      setTodos={setTodos}
      todos={todos}
      setInputText={setInputText}
      inputText={inputText}
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;