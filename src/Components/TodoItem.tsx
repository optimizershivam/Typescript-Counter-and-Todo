import React from 'react'
import { TodoitemProps } from './Todos'
const TodoItem = ({id,title,status}:TodoitemProps) => {
  return (
    <div>
        <span>{title}</span>
        <span>{`${id}-${status}`}</span>

    </div>
  )
}

export default TodoItem