import React, { useState } from 'react'

function Pixel() {
  const dragHandler = evt => {
    setStyle({
      height: '10vh',
      width: '5vw',
      opacity: 1.2,
    })
  }

  const [style, setStyle] = useState({
    height: '10vh',
    width: '5vw',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

  return (
      <div style={style}
        onDragEnter={() => dragHandler()}
        draggable={true}>
      </div>
  )
}

export default function Jodie() {
  return (
    <div className='jodie-container'>
      {Array.from({ length: 200 }, () => <Pixel />)}
    </div>
  )
}
