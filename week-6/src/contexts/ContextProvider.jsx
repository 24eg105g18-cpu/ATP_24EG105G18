import {Children, createContext, useState} from 'react'

//create context provider object
export const counterContextObj=createContext()
function ContextProvider({Children}) {
    //state
    const [counter,setCounter]=useState(10)
    //functions to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }
  return (
    <counterContextObj.Provider value={{counter,changeCounter}} >
        {Children}
         </counterContextObj.Provider>    
  
  );
}

export default ContextProvider;
