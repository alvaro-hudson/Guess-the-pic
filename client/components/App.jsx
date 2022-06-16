import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Jodie from './Jodie'
import Jared from './Jared'
import Alvaro from './Alvaro'
import Home from './Home'
import Mystery from './Mystery'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jodie' element={<Jodie />} />
        <Route path='/jared' element={<Jared />} />
        <Route path='/alvaro' element={<Alvaro />} />
        <Route path='/mystery' element={<Mystery />} />
      </Routes>
    </div>
  )
}

export default App
