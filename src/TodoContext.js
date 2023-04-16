import React,{useState,useContext,createContext} from 'react'

const todoContext=createContext();
const TodoProvider = ({children}) => {
    const [todos,setTodos]=useState([]);
    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }
    const deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    }
  return (
    <todoContext.Provider value={{todos,addTodo,deleteTodo}}>
        {children}
    </todoContext.Provider>
  )
}

export {todoContext,TodoProvider};