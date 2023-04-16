import React,{useState,useContext,createContext} from 'react'
const myContext = createContext();
const MyProvider = ({children}) => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
  <myContext.Provider value={{count,increment,decrement}}>
    {children}
  </myContext.Provider>
  )
}

export  {myContext, MyProvider}