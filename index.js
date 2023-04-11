import React from 'react'
import { useState } from "react"
import { createRoot } from 'react-dom/client'

import { buildSVG, updateSVG, initialViewBoxDimension, largestViewBoxDimension } from "./build-svg.js"

window.onload = buildSVG()

const Error = ({ zoomInError, zoomOutError }) => {
  console.log("Error running")
  console.log('zoomInError in Error', zoomInError)
  console.log('zoomOutError in Error', zoomOutError)
  if(zoomInError){
    return <span> Can't zoom in any further </span>
  }
  if (zoomOutError){
    console.log('this is running!')
    return <span> Can't zoom out any further </span>
  }
  return null
}

const zoomOutIsTooFar = (newViewBoxDimension) => newViewBoxDimension > largestViewBoxDimension
const zoomInIsTooFar = (newViewBoxDimension) => newViewBoxDimension <= 1

const ZoomableSVG = () => {

  const [viewBoxDimension, setViewBoxDimension] = useState(initialViewBoxDimension)
  const zoomStepAmount = viewBoxDimension/12

  const [ zoomInError, setZoomInError ] = useState(false)
  const [ zoomOutError, setZoomOutError ] = useState(false)


  const newZoomedInViewBoxDimension = viewBoxDimension - zoomStepAmount
  const newZoomedOutViewBoxDimension = viewBoxDimension + zoomStepAmount

  const zoomIn = () => {
    if(zoomInIsTooFar(newZoomedInViewBoxDimension)){
      setZoomInError(true)
    }
    else {
      setViewBoxDimension(newZoomedInViewBoxDimension)
      updateSVG(newZoomedInViewBoxDimension)
      zoomInError && setZoomInError(false)
    }
  }

  const zoomOut = () => {
    if(zoomOutIsTooFar(newZoomedOutViewBoxDimension)){
      setZoomOutError(true)
    }
    else {
      setViewBoxDimension(newZoomedOutViewBoxDimension)
      updateSVG(newZoomedOutViewBoxDimension)
      zoomOutError && setZoomOutError(false)
    }
  }

  const reset = () => {
    setViewBoxDimension(initialViewBoxDimension)
    updateSVG(initialViewBoxDimension)
    zoomInError && setZoomInError(false)
    zoomOutError && setZoomOutError(false)
  }

  return (
    <>
      <button type="button" id="zoom-in" onClick={zoomIn}>Zoom in</button>
      <button type="button" id="zoom-out" onClick={zoomOut}>Zoom out</button>
      <button type="button" id="reset" onClick={reset}>Reset</button>

      <Error zoomInError={ zoomInError } zoomOutError={ zoomOutError }/>
      
    </>
  )
}

const domNode = document.getElementById('zoomable-SVG')
const root = createRoot(domNode)
root.render(<ZoomableSVG />)



