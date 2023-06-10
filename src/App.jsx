import React, { useState } from 'react'


const App = () => {
 const [counter,setCounter] = useState(0)
 const [counter1,setCounter1] = useState(0)
 const [counter2,setCounter2] = useState(0)

const handleInc = () =>{
  if(counter < 10){
    setCounter(counter + 1)
  }
}
const handleDec = () =>{ 

  if(counter > 1){
    setCounter(counter - 1)
  }
 
}

const handleInc1 = () =>{
  if(counter1 < 10){
    setCounter1(counter1 + 1)
  }
}
const handleDec1 = () =>{ 
  if(counter1 > 1){
    setCounter1(counter1 - 1)
  }
}

const handleInc2 = () =>{
  if(counter2 < 10){
    setCounter2(counter2 + 1)
  }

}
const handleDec2 = () =>{ 
  if(counter2 > 1){
    setCounter2(counter2 - 1)
  }
}






  return (
    <div>
      <div>
        <h1>App</h1>
        <button onClick={handleInc}>+</button>
        <span>{counter}</span>
        <button onClick={handleDec}>-</button>
      </div>
      <div>
     
        <button onClick={handleInc1}>+</button>
        <span>{counter1}</span>
        <button onClick={handleDec1}>-</button>
      </div>
      <div>
    
        <button onClick={handleInc2}>+</button>
        <span>{counter2}</span>
        <button onClick={handleDec2}>-</button>
      </div>
      

    </div>
  )
}

export default App