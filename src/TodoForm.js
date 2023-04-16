import React,{useState,useContext} from 'react'
import { todoContext } from './TodoContext'
const TodoForm = () => {
    const [todo,setTodo]=useState('');
    const {addTodo} = useContext(todoContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo({
            id: new Date().getTime(),
            text:todo
        });
        setTodo('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Add a new todo'
        value={todo} 
        onChange={e=>setTodo(e.target.value)} />
        <button type='submit'>Add a Todo</button>
    </form>
  )
}

export default TodoForm