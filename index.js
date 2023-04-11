import React from 'react'
import { useState } from "react"
import { createRoot } from 'react-dom/client'

import { buildSVG, updateSVG, initialViewBoxDimension, largestViewBoxDimension } from "./build-svg.js"

window.onload = buildSVG()

const Error = ({ zoomError }) => {
  console.log("error running")
  console.log('zoomError', zoomError)
  if(zoomError.zoomIn){
    return <span> Can't zoom in any further </span>
  }
  if (zoomError.zoomOut){
    console.log('this is running!')
    return <span> Can't zoom out any further </span>
  }
  return null
}

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

      <Error zoomError={ zoomError } />
      
    </>
  )
}

const domNode = document.getElementById('zoomable-SVG')
const root = createRoot(domNode)
root.render(<ZoomableSVG />)



