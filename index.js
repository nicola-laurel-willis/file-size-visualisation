import { zoomIn, zoomOut, getCurrentViewBoxDimension } from "./zoom.js"
import { getEmbeddedSvgElement } from "./utilities.js"
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'


import { React } from 'react'
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
console.log("root", root)
root.render(<h1>Hello, world</h1>);

const initialViewBoxDimension = 32000
//const zoomStepValue = 1000

const gridRoot = 4
const gridSize = 400

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
.addTo('#my-svg-container')
.size(600, 600)
//.viewbox(0, 0, 32000, 32000)
.viewbox(0, 0, initialViewBoxDimension, initialViewBoxDimension)
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



//if svg viewbox values are 
//so my basic zoom step value is currently 1000



//I want to work out the current viewBox dimension in order to decide the zoom step value
//In the zoom function, I work out the current viewBox dimension in order to set the new viewBox dimension


const testFunction = () => {
  return (
    <div>
      hi
    </div>
  )
}

// ********Zoom SVG********
window.addEventListener("load", () => {
  testFunction()
  const mySvgElement = document.getElementById("my-svg-container").firstChild

  const zoomInButton = document.getElementById("zoom-in")
  const resetButton = document.getElementById("reset")
  const zoomOutButton = document.getElementById("zoom-out")


  zoomInButton.addEventListener("click", () => {
    console.log("zoom in button clicked")

    const currentViewBoxDimension = getCurrentViewBoxDimension(mySvgElement)
    
    const zoomStepValue = currentViewBoxDimension/12
  
    zoomIn(mySvgElement, zoomStepValue, initialViewBoxDimension)
  })
  
  zoomOutButton.addEventListener("click", () => {
    console.log("zoom out button clicked")

    const currentViewBoxDimension = getCurrentViewBoxDimension(mySvgElement)
    
    const zoomStepValue = currentViewBoxDimension/12


    zoomOut(mySvgElement, zoomStepValue, initialViewBoxDimension)
  })

  resetButton.addEventListener("click", () => {
    mySvgElement.setAttribute("viewBox", `0 0 ${initialViewBoxDimension} ${initialViewBoxDimension}`)
  })
})