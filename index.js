
const getCurrentViewBoxDimension = element => {
  const viewBox = element.getAttribute("viewBox")
  const heightString = viewBox.substring(8)
  console.log("heightString", heightString)
  const currentDimension = parseInt(heightString)
  return currentDimension
}

window.addEventListener("load", () => {
  const starsSvgObject = document.getElementById("stars-svg-object").contentDocument
  console.log("starsSvgObject", starsSvgObject)
  const starsSvgElement = starsSvgObject.getElementById("stars-svg-element")
  console.log("the svg element", starsSvgElement);

  

  const zoomInButton = document.getElementById("zoom-in")
  zoomInButton.addEventListener("click", () => {
    const currentDimension = getCurrentViewBoxDimension(starsSvgElement)
    const newDimension = currentDimension - 50 
    starsSvgElement.setAttribute("viewBox", `0 0 ${newDimension} ${newDimension}`)
  })

  const zoomOutButton = document.getElementById("zoom-out")
  zoomOutButton.addEventListener("click", () => {
    const currentDimension = getCurrentViewBoxDimension(starsSvgElement)
    const newDimension = currentDimension + 50
    starsSvgElement.setAttribute("viewBox", `0 0 ${newDimension} ${newDimension}`)
  })
  

});

// const starsSvgElement = document.getElementById("stars-svg-element")
// starsSvgElement.addEventListener('load', () => {
//   console.log("starsSvgElement loaded", starsSvgElement)
// })









