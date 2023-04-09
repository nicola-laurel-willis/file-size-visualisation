import { zoomIn, zoomOut } from "./zoom.js"
import { getSvgElement } from "./utilities.js"

import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

var draw = SVG().addTo('#js-svg').size(400, 400)
draw.rect(100, 100).fill('#f06').move(100, 50)

const generateGrid = () => {
  const values = []
  for (let value = 1; value <= 4; value++) {
    values.push(value)
  }

  const coordinates = values.map(rowValue => {
    //array of each column value combined with the row value
      const allCoordinatesForRow = values.map(colValue => {
        return ({
          row: rowValue,
          col: colValue
        })
      })
      return allCoordinatesForRow
  })
  .flat(1)

  console.log("coordinates", coordinates)

  const gridSize = 400
  const gridSquareEdgeLength = gridSize/values.length
  console.log("gridSquareEdgeLength", gridSquareEdgeLength)

  const positions = coordinates.map(({row, col}) => {
    return ({
      rowPosition: (row - 1) * gridSquareEdgeLength,
      colPosition: (col - 1) * gridSquareEdgeLength
    })
  })
  console.log("positions", positions)

  positions.forEach(({rowPosition, colPosition}) => {
    const group = draw.group().addClass("draw-block");
  
    // Draw Block
    group.rect(gridSquareEdgeLength, gridSquareEdgeLength).fill("white").stroke("black").move(rowPosition, colPosition);
  })

}
window.onload = generateGrid



const initialViewBoxDimension = 1000
const zoomStepValue = 100

// ********Zoom SVG********
window.addEventListener("load", () => {
  const experimentSvgElement = getSvgElement("experiment-svg-object", "experiment-svg-element")
  console.log('experimentSvgElement', experimentSvgElement)
  const zoomInButton = document.getElementById("zoom-in")
  const resetButton = document.getElementById("reset")
  const zoomOutButton = document.getElementById("zoom-out")

  zoomInButton.addEventListener("click", () => {
    console.log("zoom in button clicked")
    zoomIn(experimentSvgElement, zoomStepValue, initialViewBoxDimension)
  })
  
  zoomOutButton.addEventListener("click", () => {
    console.log("zoom out button clicked")
    zoomOut(experimentSvgElement, zoomStepValue, initialViewBoxDimension)
  })

  resetButton.addEventListener("click", () => {
    experimentSvgElement.setAttribute("viewBox", `0 0 ${initialViewBoxDimension} ${initialViewBoxDimension}`)
  })
})