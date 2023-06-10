import {useState} from 'react';


const useCounter = ({
  intialValue = 0,
  upperBound=10,
  lowerBound=0
}) => {
 const [counter,setCounter] = useState(intialValue);


 const handleInc = () =>{
    if(counter < upperBound){
      setCounter(counter + 1)
    }
  }
  const handleDec = () =>{ 
  
    if(counter > lowerBound){
      setCounter(counter - 1)
    }
   
  }
  return {
    counter,
    upperBound,
    lowerBound,
    handleInc,
    handleDec

}
}

export default useCounter