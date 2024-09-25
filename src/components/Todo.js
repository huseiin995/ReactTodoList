import React from "react";

function Todo({text, todos, setTodos, todo}) {
    const deleteHandler = ()=> {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const  completeHandler = () => {
        setTodos(todos.map(item=>{
            if(todo.id === item.id){
                return{
                    ...item,
                    complated: !item.complated
                }
            }
            return item
        }))
    }
  return (
        <div className="todo">
            <li className={`todo-item ${todo.complated ? "complated" : ''}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check" />
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash" />
            </button>
        </div>

  );
}

export default Todo;