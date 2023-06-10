import React from 'react'


const  ConuntControler = ({counter,handleInc,handleDec}) => {
  return (
    <div>
    <h1>App</h1>
    <button onClick={handleInc}>+</button>
    <span>{counter}</span>
    <button onClick={handleDec}>-</button>
  </div>
  )
}

export default ConuntControler