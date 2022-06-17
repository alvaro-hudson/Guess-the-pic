import React, { useState } from 'react'

function Pixel() {
  
  const MouseOver = () => {
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
      onMouseOver={() => MouseOver()}>
    </div>
  )
}

export default function Alvaro() {
  return (
    <div className='alvaro-container'>
      {Array.from({ length: 200 }, () => <Pixel />)}
    </div>
  )
}