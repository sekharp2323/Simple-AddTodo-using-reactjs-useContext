import React, { useContext } from 'react'
import { myContext } from './MyProvider'
const Counter = () => {
    const {count,increment}=useContext(myContext);
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter