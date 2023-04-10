import { zoomIn, zoomOut } from "./zoom.js"
import { getSvgElement } from "./utilities.js"
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'

const gridRoot = 4
const gridSize = 400

const gridSquareEdgeLength = gridSize/gridRoot

{/* <rect x="0" y="0" width="1000000" height="1000000" stroke="black" fill="yellow" stroke-width="0.5"/>
<rect x="0" y="0" width="1000" height="1000" stroke="black" fill="pink" stroke-width="0"/>
<rect x="0" y="0" width="1" height="1" stroke="black" fill="blue" stroke-width="0.02"/> */}



const byteSquareSide = Math.sqrt(0.000001)
const kilobyteSquareSide = Math.sqrt(0.001)
const megabyteSquareSide = Math.sqrt(1)
const gigabyteSquareSide = Math.sqrt(1000)

console.log("byteSquareSide", byteSquareSide)

const byte = 1
const kilobyte = 1000
const megabyte = 1000000
const gigabyte = 1000000000

//so
//kilobyte area = 1000
//kilobyteSideLength = 31.623
//gridSquareAreaForKb = 100 . so there'll be 10 of these squares within the kb area
//grid square side length = sqrt(100) ? = 10

// ok so actually... I could say that I want 10 squares along within the kb area. which would mean 100 squares in total.
//kilobyte area = 1000
//1000/100 = 10 bytes per square
//so gridSquareAreaForKb = byte * 10
//gridSquareAreaForMb = kilobyte*10
//but we're not going from this now so what I'd work out before this is
//from the side length of the kilobyte area
//divide that by 10. so kilobyteSideLength/10 = 3.1623 , so 3.1623 is the gridSquareSideForKb. 

const byteSideLength = Math.sqrt(byte) //1
const kilobyteSideLength = Math.sqrt(kilobyte) //31.623
const megabyteSideLength = Math.sqrt(megabyte) //1000
const gigabyteSideLength = Math.sqrt(gigabyte) //31623

// const gridSquareSideForKb = kilobyteSideLength/10 //3.163
// const gridSquareSideForMb = megabyteSideLength/10 //100
// const gridSquareSideForGb = gigabyteSideLength/10 //3162.277660168379

const gridSquareSideForKb = byteSideLength
const gridSquareSideForMb = kilobyteSideLength
const gridSquareSideForGb = megabyteSideLength

console.log("gridSquareSideForKb", gridSquareSideForKb)
console.log("gridSquareSideForMb", gridSquareSideForMb)
console.log("gridSquareSideForGb", gridSquareSideForGb)

const gridStrokeWidthForKb = gridSquareSideForKb/100
const gridStrokeWidthForMb = gridSquareSideForMb/100
const gridStrokeWidthForGb = gridSquareSideForGb/100

const mySVG = SVG()
.addTo('#my-svg')
.size(600, 600)
.viewbox(0, 0, 15, 15)
.attr({"style": "border: 1px solid black"})


//gigabyte -> 31623
mySVG
.rect(gigabyteSideLength, gigabyteSideLength)
.fill("yellow")

//megabyte -> 1000
mySVG
.rect(megabyteSideLength, megabyteSideLength)
.fill("lightblue")

//kilobyte -> 31.623
mySVG
.rect(kilobyteSideLength, kilobyteSideLength)
.fill("pink")

//byte -> 1
mySVG
.rect(byteSideLength, byteSideLength)
.fill("cyan")


const gridPattern = mySVG
.pattern(gridSquareSideForKb, gridSquareSideForKb, add => {
  add.rect(gridSquareSideForKb, gridSquareSideForKb).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: gridStrokeWidthForKb})
})

mySVG.rect(31623, 31623).fill(gridPattern)

const gridPattern2 = mySVG
.pattern(gridSquareSideForMb, gridSquareSideForMb, add => {
  add.rect(gridSquareSideForMb, gridSquareSideForMb).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: gridStrokeWidthForMb})
})

mySVG.rect(31623, 31623).fill(gridPattern2)

const gridPattern3 = mySVG
.pattern(gridSquareSideForGb, gridSquareSideForGb, add => {
  add.rect(gridSquareSideForGb, gridSquareSideForGb).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: gridStrokeWidthForGb})
})

mySVG.rect(31623, 31623).fill(gridPattern3)



// const gridPattern2 = mySVG
// .pattern(0.1, 0.1, add => {
//   add.rect(0.1, 0.1).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: 0.001})
// })


// mySVG.rect(1000, 10000).fill(gridPattern2)









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
    // createSvgGridSquare(rowPosition, colPosition)
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