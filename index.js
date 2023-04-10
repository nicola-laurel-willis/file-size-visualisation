import { zoomIn, zoomOut } from "./zoom.js"
import { getSvgElement } from "./utilities.js"
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

const gridRoot = 4
const gridSize = 400

const gridSquareEdgeLength = gridSize/gridRoot

{/* <rect x="0" y="0" width="1000000" height="1000000" stroke="black" fill="yellow" stroke-width="0.5"/>
<rect x="0" y="0" width="1000" height="1000" stroke="black" fill="pink" stroke-width="0"/>
<rect x="0" y="0" width="1" height="1" stroke="black" fill="blue" stroke-width="0.02"/> */}


const mySVG = SVG()
.addTo('#my-svg')
.size(600, 600)
.viewbox(0, 0, 0.1, 0.1)
.attr({"style": "border: 1px solid black"})

mySVG
.rect(1000, 1000)
//.stroke({ color: "hotpink", opacity: 0.4, width: 0.1})
.fill("rgba(245, 40, 145, 0.1)")

mySVG
.rect(1, 1)
//.stroke({ color: "hotpink", opacity: 0.4, width: 0.001})
.fill("rgba(245, 40, 145, 0.3)")

mySVG
.rect(0.01, 0.01)
//.stroke({ color: "hotpink", opacity: 0.4, width: 0.000001})
.fill("rgba(245, 40, 145, 0.5)")

// const mySVGFromDOM = 


const squareLength = 0.01/10


const createSvgGridSquare = (rowPosition, colPosition) => {
  //const group = draw.group().addClass("draw-block")
  console.log('create svg grid square')
  const strokeWidth = 0.01/100

  mySVG
  .rect(squareLength, squareLength)
  .stroke({ color: "black", opacity: 0.4, width: strokeWidth})
  .fill("rgba(245, 40, 145, 0)")
  .move(rowPosition, colPosition)
}

const generateGrid = () => {
  const values = []
  for (let value = 1; value <= 10; value++) {
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

  const positions = coordinates.map(({row, col}) => {
    return ({
      rowPosition: (row - 1) * squareLength,
      colPosition: (col - 1) * squareLength
    })
  })

  positions.forEach(({rowPosition, colPosition}) => {
    createSvgGridSquare(rowPosition, colPosition)
  })
}


window.onload = generateGrid






const initialViewBoxDimension = 1000
const zoomStepValue = 100

// ********Zoom SVG********
window.addEventListener("load", () => {
  const experimentSvgElement = getSvgElement("experiment-svg-object", "experiment-svg-element")
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