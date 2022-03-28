import React, { useEffect, useRef } from 'react'
// import { useLocation } from 'react-router-dom'
import ScrollBar from 'react-smooth-scrollbar'

function ScrollbarGlobal({ children }) {
  
  const ref = useRef(null);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   const { scrollBar } = ref.current
  //   scrollBar.setPosition(0, 0)
  // },[pathname])

  return (
    <ScrollBar ref={ref} damping={.09}>
      {
        children
      }
    </ScrollBar>
  )
}

export default ScrollbarGlobal
