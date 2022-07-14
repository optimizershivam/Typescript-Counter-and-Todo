import React from 'react'


interface ButtonProps 
{
    label:string,
    handleClick:()=> void
}
const Button = (props:ButtonProps) => {
    const {label,handleClick} = props
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button