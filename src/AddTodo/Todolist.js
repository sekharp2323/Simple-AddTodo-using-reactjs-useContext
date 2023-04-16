import React,{useContext} from 'react'
import { todoContext } from './TodoContext'
const Todolist = () => {
    const {todos,deleteTodo}=useContext(todoContext);
  return (
    <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>deleteTodo(todo.id)}>X</button>
                </li>
            ))
        }
    </ul>
  )
}

export default Todolist