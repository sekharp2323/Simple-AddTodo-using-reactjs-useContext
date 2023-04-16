import React, { useContext } from 'react'
import { myContext } from './MyProvider'
const Display = () => {
    const {count,decrement}=useContext(myContext);
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Display