import React, { useState } from 'react'

function Pixel() {
  const clickHandler = evt => {
    setStyle({
      height: '10vh',
      width: '5vw',
      opacity: 1.2
    })
  }

  const [style, setStyle] = useState({
    height: '10vh',
    width: '5vw',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

  return (
      <div style={style}
        onClick={() => clickHandler()}>
      </div>
  )
}

export default function Jared() { 
  return (
  <div className='jared-container'>
      {Array.from({ length: 200 }, () => <Pixel />)}
  </div>
  )
}
