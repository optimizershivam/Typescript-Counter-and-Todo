import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
const [count,setCount] = useState(0)
const handleClick=(value:number) =>{
    setCount(count+value)
}

// <Header label='This label is send by me if i dont send this counter will come due to optional chaining'> 
  return (
    <div>
        <Header > 
            <div> Child Counter Header </div> 
            <div> Child Counter Header </div> 
            <div> Child Counter Header </div> 
        </Header> 
        <Header label = {`${count}`}/>
        <Button label="Add" handleClick={()=> handleClick(1)}/>
        <Button label = "reduce" handleClick={()=> handleClick(-1)}/>
    </div>
  )
}

export default Counter