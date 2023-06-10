import React, { useState , } from 'react';
import useCounter from './useCounter';
import ConuntControler from './CountControler'




const App = () => {
  const {counter,handleInc,handleDec} = useCounter({intialValue:5})
  const {counter:counter1,handleInc:handleInc1,handleDec:handleDec1} = useCounter({intialValue:10,  upperBound:15,lowerBound:-10})

  const {counter:counter2,handleInc:handleInc2,handleDec:handleDec2} = useCounter({intialValue: 15})



  return (
    <div>

      <ConuntControler 
        counter = {counter}
        handleInc={handleInc}
        handleDec={handleDec}
      />

      <ConuntControler 
        counter = {counter1}
        handleInc={handleInc1}
        handleDec={handleDec1}
      />
        <ConuntControler 
        counter = {counter2}
        handleInc={handleInc2}
        handleDec={handleDec2}
      />

    </div>
  )
}

export default App