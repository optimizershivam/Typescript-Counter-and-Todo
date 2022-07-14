import React from 'react'
import { TodoitemProps } from './Todos'
interface TodoFunctionalityProps {
 todo:TodoitemProps
 handleUpdateTodo:(todo:TodoitemProps)=>void
 handleToggleTodo:(todo:TodoitemProps)=>void
 handleDeleteTodo:(id:number)=>void

}
const TodoItem = ({todo,handleDeleteTodo,handleToggleTodo,handleUpdateTodo}:TodoFunctionalityProps) => {
  const deleteTodo :React.MouseEventHandler<HTMLButtonElement>=() => {
handleDeleteTodo(todo.id)
  }
  const updateTodo :React.MouseEventHandler<HTMLButtonElement>=() => {
handleUpdateTodo(todo)
  }
  const toggleTodo :React.MouseEventHandler<HTMLButtonElement>=() => {
handleToggleTodo(todo)
  }
  return (
    <div style={{border:"2px solid ",margin:"auto",padding:"10px", marginTop:"20px",width:"fit-content"}}>
        <h3>{todo.title}</h3>
        {todo.status? "Completed" : "Not Completed"}
        <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
        <button onClick={deleteTodo}>Delete</button>
        <button onClick={updateTodo}>Update</button>
        <button onClick={toggleTodo}>Toggle</button>
        </div>
    </div>
  )
}

export default TodoItem