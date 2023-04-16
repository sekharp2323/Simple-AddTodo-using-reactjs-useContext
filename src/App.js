import React from 'react'
import TodoForm from './TodoForm'
import Todolist from './Todolist'
import { TodoProvider } from './TodoContext'
const App = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <Todolist />
    </TodoProvider>
  )
}

export default App