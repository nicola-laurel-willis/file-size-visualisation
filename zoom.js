//const zoomStepValue = 10
//const basicSvgDimension = 1000

const getCurrentViewBoxDimension = element => {
  const viewBox = element.getAttribute("viewBox")
  const dimensionString = viewBox.substring(4)
  return dimensionString.split(" ")[0]
}


//viewBox width and height dimensions say how many units the viewport should contain. If I say the viewport should contain 300 units, and my svg has 600 units, this means that 300 of the svg's units will fit into the viewport and another 300 will be invisible outside the viewport. Therefore, in order to "zoom in", we decrease the width and height dimensions in the viewBox property, aka we are saying that less of the svg is to fit into the viewport. On the other hand, if we want to "zoom out", aka have more of the svg's units fit into the viewport, we should increase the dimensions in viewBox, which is saying that we want more units to fit into the viewport.
const increaseViewBoxDimension = (currentViewBoxDimension, zoomStepValue) => currentViewBoxDimension + zoomStepValue
const decreaseViewBoxDimension = (currentViewBoxDimension, zoomStepValue) => currentViewBoxDimension - zoomStepValue

const zoom = getNewViewBoxDimension => (svgElement, zoomStepValue, initialViewBoxDimension) => {
  const currentViewBoxDimension = getCurrentViewBoxDimension(svgElement)
  console.log("currentViewBoxDimension", currentViewBoxDimension)

  const newViewBoxDimension = getNewViewBoxDimension(currentViewBoxDimension, zoomStepValue)

  console.log("newViewBoxDimension", newViewBoxDimension)
  if(newViewBoxDimension < 0){
    svgElement.setAttribute("viewBox", "0 0 1 1")
  }
  if(newViewBoxDimension > 0 && newViewBoxDimension <= initialViewBoxDimension){
    svgElement.setAttribute("viewBox", `0 0 ${newViewBoxDimension} ${newViewBoxDimension}`)
  }
  // if(newViewBoxDimension > initialViewBoxDimension){
  //   svgElement.setAttribute("viewBox", `0 0 ${initialDimension} ${initialDimension}`)
  // }
}
const zoomIn = zoom(decreaseViewBoxDimension)
const zoomOut = zoom(increaseViewBoxDimension)

export { zoomIn, zoomOut }