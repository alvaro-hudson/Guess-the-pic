import React, { useState } from 'react'

function Pixel() {
  const clickHandler = evt => {
    setStyle({
      height: '20px',
      width: '20px',
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  const [style, setStyle] = useState({
    height: '20px',
    width: '20px',
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
    Array.from({ length: 50 }, () => <Pixel />)
  )
}
