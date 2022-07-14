import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Todoinput from './Todoinput'
import TodoItem from './TodoItem';
export interface TodoitemProps 
{
  id: number;
  title:string;
  status:boolean;  
}

const Todos = () => {
    const [todos,setTodos] = useState<TodoitemProps[]>([])
    const [value,setValue] = useState<string>("")
    const handleAdd = (title:string) => 
    {

        const payload = 
        {
            title:title,
            status:false,
            id:Date.now()
        
        }
        axios.post("http://localhost:8080/todos",payload)
        .then((res)=> {
          getTodos()
        })
        // setTodos([...todos,payload])
    }

    const getTodos = () =>{
        axios
        .get("http://localhost:8080/todos")
        .then((response:AxiosResponse <TodoitemProps[]>) => 
            {
             const {data} = response;
             setTodos(data)
            })
    }

    const deleteTodo = (id:number) => 
    {
      axios.delete(`http://localhost:8080/todos/${id}`)
      .then((res)=> {
        getTodos()
      })
    }
  
    const updateTodo = (todo:TodoitemProps) => 
    {
      axios.patch(`http://localhost:8080/todos/${todo.id}`,{title:value})
      .then((res)=> {
        getTodos()
      })
    }
  const toggleTodo = (todo:TodoitemProps) => 
  {
    axios.patch(`http://localhost:8080/todos/${todo.id}`,{status:!todo.status})
      .then((res)=> {
        getTodos()
      })
  }

    useEffect(()=> 
    {
        getTodos()
    },[])
  return (
    <div>
   <Header label='My Todo'></Header>
   <Todoinput value={value} setInputValue={setValue} handleAdd={handleAdd}/>
   { todos.length >0 && todos.map((todo)=> {
    return <TodoItem handleDeleteTodo={deleteTodo} handleUpdateTodo={updateTodo} handleToggleTodo={toggleTodo} 
    key = {todo.id} todo={todo}/>

   })

   }

    </div>
  )
}

export default Todos