// //const zoomStepValue = 10
// //const basicSvgDimension = 1000

// const getCurrentViewBoxDimension = element => {
//   const viewBox = element.getAttribute("viewBox")
//   const dimensionString = viewBox.substring(4)
//   const currentDimension = parseInt(dimensionString.split(" ")[0])
//   return currentDimension
// }

// //viewBox width and height dimensions say how many units the viewport should contain. If I say the viewport should contain 300 units, and my svg has 600 units, this means that 300 of the svg's units will fit into the viewport and another 300 will be invisible outside the viewport. Therefore, in order to "zoom in", we decrease the width and height dimensions in the viewBox property, aka we are saying that less of the svg is to fit into the viewport. On the other hand, if we want to "zoom out", aka have more of the svg's units fit into the viewport, we should increase the dimensions in viewBox, which is saying that we want more units to fit into the viewport.
// const increaseViewBoxDimension = (currentViewBoxDimension, zoomStepValue) => currentViewBoxDimension + zoomStepValue
// const decreaseViewBoxDimension = (currentViewBoxDimension, zoomStepValue) => currentViewBoxDimension - zoomStepValue

// const zoom = getNewViewBoxDimension => (svgElement, zoomStepValue, initialViewBoxDimension) => {


//   const currentViewBoxDimension = getCurrentViewBoxDimension(svgElement)
//   const newViewBoxDimension = getNewViewBoxDimension(currentViewBoxDimension, zoomStepValue)

//   if(newViewBoxDimension < 0){
//     console.log("not setting anything new")
//   }
//   if(newViewBoxDimension > 0 && newViewBoxDimension <= initialViewBoxDimension){
//     svgElement.setAttribute("viewBox", `0 0 ${newViewBoxDimension} ${newViewBoxDimension}`)
//   }
//   // if(newViewBoxDimension > initialViewBoxDimension){
//   //   svgElement.setAttribute("viewBox", `0 0 ${initialDimension} ${initialDimension}`)
//   // }
// }
// const zoomIn = zoom(decreaseViewBoxDimension)
// const zoomOut = zoom(increaseViewBoxDimension)

// // export { zoomIn, zoomOut, getCurrentViewBoxDimension }


// // ********Zoom SVG********
// window.addEventListener("load", () => {
//   testFunction()
//   const mySvgElement = document.getElementById("my-svg-container").firstChild

//   const zoomInButton = document.getElementById("zoom-in")
//   const resetButton = document.getElementById("reset")
//   const zoomOutButton = document.getElementById("zoom-out")


//   zoomInButton.addEventListener("click", () => {
//     console.log("zoom in button clicked")

//     const currentViewBoxDimension = getCurrentViewBoxDimension(mySvgElement)
    
//     const zoomStepValue = currentViewBoxDimension/12
  
//     zoomIn(mySvgElement, zoomStepValue, initialViewBoxDimension)
//   })
  
//   zoomOutButton.addEventListener("click", () => {
//     console.log("zoom out button clicked")

//     const currentViewBoxDimension = getCurrentViewBoxDimension(mySvgElement)
    
//     const zoomStepValue = currentViewBoxDimension/12


//     zoomOut(mySvgElement, zoomStepValue, initialViewBoxDimension)
//   })

//   resetButton.addEventListener("click", () => {
//     mySvgElement.setAttribute("viewBox", `0 0 ${initialViewBoxDimension} ${initialViewBoxDimension}`)
//   })
// })