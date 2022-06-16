import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Jodie from './Jodie'
import Jared from './Jared'
import Alvaro from './Alvaro'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <Routes>
        <Route path='/test' element={<h1>TEST ROUTE</h1>} />
      </Routes>
    </div>
  )
}

export default App
