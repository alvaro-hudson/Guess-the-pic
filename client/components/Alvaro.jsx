import React, { useState } from 'react'

import useSound from 'use-sound'

import scream from '../../server/public/Humi1013.mp3'

function Pixel() {

  const [play] = useSound(scream)
  
  const MouseOver = () => {
    play()
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