import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home's page! Wooo!</h1>
      <Link to='/jodie'><h1>Jodie's page</h1></Link>
      <Link to='/jared'><h1>Jared's page</h1></Link>
      <Link to='/alvaro'><h1>Alvaro's page</h1></Link>
      <Link to='/mystery'><h1>Mystery page</h1></Link>
    </>
  )
}

export default Home