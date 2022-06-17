import React, { useState } from 'react'

import useSound from 'use-sound'

import scream from '../../server/public/Humi1013.mp3'

function Pixel(props) {
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
      onMouseOver={() => MouseOver()}
      onClick={props.onClick}>
    </div>
  )
}

export default function Alvaro() {
  const [bgNumber, setBgNumber] = useState(0)
  const backgroundClasses = [
    'alvaro-image',
    'alvaro-image2',
    'alvaro-image3',
    'd',
    'e'

  ]

  function cycleBackground() {
    let nextIndex = (bgNumber + 1) % backgroundClasses.length
    setBgNumber(nextIndex)
  }

  const bgClass = backgroundClasses[bgNumber]

  return (  
    <div className={`alvaro-container ${bgClass}`}>
      {Array.from({ length: 200 }, () => <Pixel onClick={cycleBackground}/>)}
    </div>
  )
}