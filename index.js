import React from 'react'
import { useState } from "react"
import { createRoot } from 'react-dom/client'

import { buildSVG, updateSVG, initialViewBoxDimension, largestViewBoxDimension } from "./build-svg.js"

window.onload = buildSVG()

const ZoomableVisualisation = () => {

  const [viewBoxDimension, setViewBoxDimension] = useState(initialViewBoxDimension)
  const zoomStepAmount = viewBoxDimension/12



  //use viewBoxDimension to detect 


  const zoomIn = () => {
    //if newViewBoxDimension is greater than or equal to 1
    //then set it as new state and update the svg
    //if newViewBoxDimension is less than 1
    //then set the state with the same viewBox dimension as before

    const newViewBoxDimension = viewBoxDimension - zoomStepAmount
    if(newViewBoxDimension >= 1){
      setViewBoxDimension(newViewBoxDimension)
      updateSVG(newViewBoxDimension)
    }
    else {
      console.log("Can't zoom in any more than this!")
    }
  }

  const zoomOut = () => {
    const newViewBoxDimension = viewBoxDimension + zoomStepAmount
    if(newViewBoxDimension <= largestViewBoxDimension){
      setViewBoxDimension(newViewBoxDimension)
      updateSVG(newViewBoxDimension)
    }
    else {
      console.log("Can't zoom out any more than this!")
    }
  }

  const reset = () => {
    setViewBoxDimension(initialViewBoxDimension)
    updateSVG(initialViewBoxDimension)
  }

  


  return (
    <>
      <button type="button" id="zoom-in" onClick={zoomIn}>Zoom in</button>
      <button type="button" id="zoom-out" onClick={zoomOut}>Zoom out</button>
      <button type="button" id="reset" onClick={reset}>Reset</button>
    </>
  )
}

const domNode = document.getElementById('zoomable-visualisation')
const root = createRoot(domNode)
root.render(<ZoomableVisualisation />)



