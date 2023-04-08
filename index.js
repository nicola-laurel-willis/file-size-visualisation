const zoomStepValue = 50
const basicSvgDimension = 600

const getCurrentViewBoxDimension = element => {
  const viewBox = element.getAttribute("viewBox")
  const dimensionString = viewBox.substring(8)
  return parseInt(dimensionString)
}

const getSvgElement = (svgObjectId, svgElementId) => {
  const svgDocument = document.getElementById(svgObjectId).contentDocument
  const svgElement = svgDocument.getElementById(svgElementId)
  return svgElement
}

//viewBox width and height dimensions say how many units the viewport should contain. If I say the viewport should contain 300 units, and my svg has 600 units, this means that 300 of the svg's units will fit into the viewport and another 300 will be invisible outside the viewport. Therefore, in order to "zoom in", we decrease the width and height dimensions in the viewBox property, aka we are saying that less of the svg is to fit into the viewport. On the other hand, if we want to "zoom out", aka have more of the svg's units fit into the viewport, we should increase the dimensions in viewBox, which is saying that we want more units to fit into the viewport.
const increaseViewBoxDimension = currentViewBoxDimension => currentViewBoxDimension + zoomStepValue
const decreaseViewBoxDimension = currentViewBoxDimension => currentViewBoxDimension - zoomStepValue

const zoom = getNewDimension => svgElement => {
  const currentViewBoxDimension = getCurrentViewBoxDimension(svgElement)
  const newDimension = getNewDimension(currentViewBoxDimension)
  if(newDimension < 0){
    svgElement.setAttribute("viewBox", "0 0 1 1")
  }
  if(newDimension > 0){
    svgElement.setAttribute("viewBox", `0 0 ${newDimension} ${newDimension}`)
  }
  if(newDimension > basicSvgDimension){
    svgElement.setAttribute("viewBox", `0 0 ${basicSvgDimension} ${basicSvgDimension}`)
  }
}
const zoomIn = zoom(decreaseViewBoxDimension)
const zoomOut = zoom(increaseViewBoxDimension)


window.addEventListener("load", () => {
  const starsSvgElement = getSvgElement("stars-svg-object", "stars-svg-element")
  const zoomInButton = document.getElementById("zoom-in")
  const resetButton = document.getElementById("reset")
  const zoomOutButton = document.getElementById("zoom-out")

  zoomInButton.addEventListener("click", () => {
    zoomIn(starsSvgElement)
  })
  
  zoomOutButton.addEventListener("click", () => {
    zoomOut(starsSvgElement)
  })

  resetButton.addEventListener("click", () => {
    starsSvgElement.setAttribute("viewBox", `0 0 ${basicSvgDimension} ${basicSvgDimension}`)
  })

})







