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
    const handleAdd = (title:string) => 
    {

        const payload = 
        {
            title,
            status:false,
        
        }
        axios.post("http://localhost:8080/todos",payload).
        then(getTodos)
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
    useEffect(()=> 
    {
        getTodos()
    },[])
  return (
    <div>
   <Header label='My Todo'></Header>
   <Todoinput onClick={handleAdd}/>
   { todos.length >0 && todos.map((item)=> {
    return <TodoItem key = {item.id} {...item}/>
   })

   }

    </div>
  )
}

export default Todos