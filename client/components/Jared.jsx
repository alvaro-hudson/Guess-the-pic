import React, { useState } from 'react'
import { motion } from "framer-motion"

function Pixel() {
  const clickHandler = () => {
    setDiv(false)
  }

  const [style, setStyle] = useState({
    height: '10vh',
    width: '5vw',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

  const [normalDiv, setDiv] = useState(true)

  return (
    <>
    {normalDiv ? ( 
    <div style={style} 
        onClick={() => clickHandler()}
      />
      ) :( 
      <motion.div style={style}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        opacity: [1,1,1,1,0]
      }}
        onClick={() => clickHandler()}
      />
    )}
      
      </>
  )
}

export default function Jared() { 
  return (
  <div className='jared-container'>
      {Array.from({ length: 200 }, () => <Pixel />)}
  </div>
  )
}
