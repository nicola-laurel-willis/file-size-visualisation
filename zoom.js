

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