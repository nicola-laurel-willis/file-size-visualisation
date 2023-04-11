import React from 'react'
import { useState } from "react"
import { createRoot } from 'react-dom/client'

import { buildSVG, updateSVG, initialViewBoxDimension } from "./build-svg.js"

window.onload = buildSVG()

const ZoomableVisualisation = () => {

  const [viewBoxDimension, setViewBoxDimension] = useState(initialViewBoxDimension)
  const zoomStepAmount = viewBoxDimension/12


  const zoomIn = () => {
    const newViewBoxDimension = viewBoxDimension - zoomStepAmount
    setViewBoxDimension(newViewBoxDimension)
    updateSVG(newViewBoxDimension)
  }

  const zoomOut = () => {
    const newViewBoxDimension = viewBoxDimension + zoomStepAmount
    setViewBoxDimension(newViewBoxDimension)
    updateSVG(newViewBoxDimension)
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



