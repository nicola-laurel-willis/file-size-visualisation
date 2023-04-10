import { SVG } from '@svgdotjs/svg.js'

const initialViewBoxDimension = 32000
const largestViewBoxDimension = 32000

const byte = 1
const kilobyte = 1000
const megabyte = 1000000
const gigabyte = 1000000000

const byteSideLength = Math.sqrt(byte) //1
const kilobyteSideLength = Math.sqrt(kilobyte) //31.623
const megabyteSideLength = Math.sqrt(megabyte) //1000
const gigabyteSideLength = Math.sqrt(gigabyte) //31623
// const gridSquareSideForKb = byteSideLength
// const gridSquareSideForMb = kilobyteSideLength
// const gridSquareSideForGb = megabyteSideLength


const getStrokeWidth = squareLength => squareLength/100
const createSizeBlock = (svg, sideLength, fillStyle) => {
  svg
  .rect(sideLength, sideLength)
  .fill(fillStyle)
  .radius(sideLength/90)
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
  const mySVG = SVG()
    .addTo('#my-svg-container')
    .size(600, 600)
    .viewbox(0, 0, initialViewBoxDimension, initialViewBoxDimension)
    .attr({"style": "border: 1px solid black"})

  //top thing drawn first at the bottom. layers up as you go down here.  
  createSizeBlock(mySVG, gigabyteSideLength, { color: "yellow" })
  createSizeBlock(mySVG, megabyteSideLength, { color: "lightblue" })
  createSizeBlock(mySVG, kilobyteSideLength, { color: "pink" })
  createSizeBlock(mySVG, byteSideLength, { color: "cyan" })

  createGrid(mySVG, byteSideLength)
  createGrid(mySVG, kilobyteSideLength)
  createGrid(mySVG, megabyteSideLength)
}

window.onload = buildSVG

// const gridPattern = mySVG
// .pattern(gridSquareSideForKb, gridSquareSideForKb, add => {
//   add.rect(gridSquareSideForKb, gridSquareSideForKb).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: gridStrokeWidthForKb})
// })

// mySVG.rect(31623, 31623).fill(gridPattern)

// const gridPattern2 = mySVG
// .pattern(gridSquareSideForMb, gridSquareSideForMb, add => {
//   add.rect(gridSquareSideForMb, gridSquareSideForMb).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: gridStrokeWidthForMb})
// })

// mySVG.rect(31623, 31623).fill(gridPattern2)

// const gridPattern3 = mySVG
// .pattern(gridSquareSideForGb, gridSquareSideForGb, add => {
//   add.rect(gridSquareSideForGb, gridSquareSideForGb).fill({color: '#fff', opacity: 0}).stroke({ color: "#000", opacity: 0.3, width: gridStrokeWidthForGb})
// })

// mySVG.rect(31623, 31623).fill(gridPattern3)


