import { SVG } from '@svgdotjs/svg.js'

export const initialViewBoxDimension = 34000
export const largestViewBoxDimension = 35000

const byte = 1
const kilobyte = 1000
const megabyte = 1000000
const gigabyte = 1000000000

const byteSideLength = Math.sqrt(byte) //1    <- side length for the kb grid
const kilobyteSideLength = Math.sqrt(kilobyte) //31.623    <- side length for the mb grid
const megabyteSideLength = Math.sqrt(megabyte) //1000 <- side length for the gb grid
const gigabyteSideLength = Math.sqrt(gigabyte) //31623


const getStrokeWidth = squareLength => squareLength/100
const createSizeBlock = (svg, sideLength, fillStyle) => {
  svg
  .rect(sideLength, sideLength)
  .fill(fillStyle)
}

const createGrid = (svg, squareLength) => {
  const strokeWidth = getStrokeWidth(squareLength)

  const gridPattern = svg
  .pattern(squareLength, squareLength, add => {
    add
    .rect(squareLength, squareLength)
    .fill({color: '#fff', opacity: 0})
    .stroke({ color: "#000", opacity: 0.3, width: strokeWidth})
  })

  svg
  .rect(largestViewBoxDimension, largestViewBoxDimension)
  .fill(gridPattern)
}

const buildSVG = () => {
  console.log('build SVGrunning')
  const mySVG = SVG()
    .addTo('#my-svg-container')
    .size(600, 600)
    .viewbox(0, 0, initialViewBoxDimension, initialViewBoxDimension)
    .attr({"style": "border: 1px solid black", "id": "my-svg"})

  //top thing drawn first at the bottom. layers up as you go down here.  
  createSizeBlock(mySVG, gigabyteSideLength, { color: "yellow" })
  createSizeBlock(mySVG, megabyteSideLength, { color: "lightblue" })
  createSizeBlock(mySVG, kilobyteSideLength, { color: "pink" })
  createSizeBlock(mySVG, byteSideLength, { color: "cyan" })

  createGrid(mySVG, byteSideLength)
  createGrid(mySVG, kilobyteSideLength)
  createGrid(mySVG, megabyteSideLength)
  createGrid(mySVG, gigabyteSideLength)
}

const updateSVG = newViewBoxDimension => {
  //console.log("updateSVG")
  const mySVG = document.getElementById("my-svg")
  //console.log("mySVG", mySVG)
  mySVG.setAttribute("viewBox", `0, 0, ${newViewBoxDimension}, ${newViewBoxDimension}`)
}

export { buildSVG, updateSVG }


