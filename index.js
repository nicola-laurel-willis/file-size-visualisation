import { zoomIn, zoomOut } from "./zoom.js"
import { getSvgElement } from "./utilities.js"


window.addEventListener("load", () => {
  const experimentSvgElement = getSvgElement("experiment-svg-object", "experiment-svg-element")
  const zoomInButton = document.getElementById("zoom-in")
  const resetButton = document.getElementById("reset")
  const zoomOutButton = document.getElementById("zoom-out")

  zoomInButton.addEventListener("click", () => {
    console.log("zoom in button clicked")
    zoomIn(experimentSvgElement)
  })
  
  zoomOutButton.addEventListener("click", () => {
    console.log("zoom out button clicked")
    zoomOut(experimentSvgElement)
  })

  resetButton.addEventListener("click", () => {
    experimentSvgElement.setAttribute("viewBox", `0 0 ${basicSvgDimension} ${basicSvgDimension}`)
  })
})