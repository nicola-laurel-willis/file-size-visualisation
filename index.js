import React from 'react'
import { useState } from "react"
import { createRoot } from 'react-dom/client'

import { buildSVG, updateSVG, initialViewBoxDimension, largestViewBoxDimension } from "./build-svg.js"

window.onload = buildSVG()

const ZoomableSVG = () => {

  const [viewBoxDimension, setViewBoxDimension] = useState(initialViewBoxDimension)
  const zoomStepAmount = viewBoxDimension/12

  const [zoomError, setZoomError] = useState({ zoomIn: false, zoomOut: false })

  const zoomIn = () => {
    const newViewBoxDimension = viewBoxDimension - zoomStepAmount
    if(newViewBoxDimension >= 1){
      setViewBoxDimension(newViewBoxDimension)
      updateSVG(newViewBoxDimension)
      setZoomError({ zoomIn: false, zoomOut: false })
    }
    else {
      setZoomError({ zoomIn: true, zoomOut: false })
    }
  }

  const zoomOut = () => {
    const newViewBoxDimension = viewBoxDimension + zoomStepAmount
    if(newViewBoxDimension <= largestViewBoxDimension){
      setViewBoxDimension(newViewBoxDimension)
      updateSVG(newViewBoxDimension)
      setZoomError({ zoomIn: false, zoomOut: false })
    }
    else {
      setZoomError({ zoomIn: false, zoomOut: true })
    }
  }

  const reset = () => {
    setViewBoxDimension(initialViewBoxDimension)
    updateSVG(initialViewBoxDimension)
    setZoomError({ zoomIn: false, zoomOut: false })
  }

  return (
    <>
      <button type="button" id="zoom-in" onClick={zoomIn}>Zoom in</button>
      <button type="button" id="zoom-out" onClick={zoomOut}>Zoom out</button>
      <button type="button" id="reset" onClick={reset}>Reset</button>

      {
        zoomError.zoomIn ? <span> Can't zoom in any further </span> : null
      }
      {
        zoomError.zoomOut ? <span> Can't zoom out any further </span> : null
      }
      
    </>
  )
}

const domNode = document.getElementById('zoomable-SVG')
const root = createRoot(domNode)
root.render(<ZoomableSVG />)



