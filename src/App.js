import React from 'react'
import TodoForm from './AddTodo/TodoForm'
import Todolist from './AddTodo/Todolist'
import { TodoProvider } from './AddTodo/TodoContext'
const App = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <Todolist />
    </TodoProvider>
  )
}

export default App