import React from "react";

function Form({setInputText, todos, setTodos, inputText, setStatus}) {
    const inputTextHandler = (e) => {
    setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText !== "")
        setTodos(
            [
                ...todos, {text: inputText, complated: false, id: Math.random() * 1000}
            ]
        )
        setInputText("")
    }
    const statusHandler = (e) => {
      setStatus(e.target.value);
    }
  return (
    <form>
      <input type="text" 
      className="todo-input" 
      onChange={inputTextHandler} 
      value={inputText}
      />

      <button 
      className="todo-button" 
      type="submit"
      onClick={submitTodoHandler}
      >
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select 
        name="todos" 
        id="todo" 
        className="filter-todo"
        onChange={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
