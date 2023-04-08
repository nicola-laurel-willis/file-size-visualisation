
window.addEventListener("load", () => {
  const starsSvgObject = document.getElementById("stars-svg-object").contentDocument
  console.log("starsSvgObject", starsSvgObject)
  const starsSvgElement = starsSvgObject.getElementById("stars-svg-element")
  console.log("the svg element", starsSvgElement);

  const zoomInButton = document.getElementById("zoom-in")
  zoomInButton.addEventListener("click", () => {
    console.log("clicked zoom in button")    
    starsSvgElement.setAttribute("viewBox", "0 0 300 300")
  })
  

});

// const starsSvgElement = document.getElementById("stars-svg-element")
// starsSvgElement.addEventListener('load', () => {
//   console.log("starsSvgElement loaded", starsSvgElement)
// })









