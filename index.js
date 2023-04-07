// utility functions
const getMultiplicationAmount = unit => {
  if(unit === "kb"){
    return 0
  }
  if(unit === "mb"){
    return 1000
  }
  if(unit === "gb"){
    return 1000000
  }
}
//------------------------------------

// const windowWidth = window.innerWidth
// const windowHeight = window.innerHeight
// console.log("windowWidth", windowWidth)
// console.log("windowHeight", windowHeight)

//testing out a commit 
//another test

const numericalSizeInputElement = document.getElementById("numerical-size")
const unitInputElement = document.getElementById("unit")

const visualiseButton = document.getElementById("visualise-button")

// window.onload = (event) => {
//   const test = document.getElementById('planets')
//   console.log("planets SVG element", test)
// }

console.log("HELLO?")

const planets = document.getElementById('planets')
console.log("planets SVG element", planets)

planets.addEventListener('load', () => {
    // Will get called after embed element was loaded
    console.log('did it load?')
    const zoomablePlanets = window.svgPanZoom(planets, {
      //controlIconsEnabled: true,
      panEnabled: false
    })

    const zoomInButton = document.getElementById("zoom-in")
    //accessibility? onclick?
    //https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35
    zoomInButton.addEventListener("click", () => {
      zoomablePlanets.zoomIn()
    })
    
  })


//const panZoomPlanets = svgPanZoom(planetsSvgElement);

console.log("Window object", window)

visualiseButton.addEventListener("click", () => {

  const numericalSize = numericalSizeInputElement.value
  const unit = unitInputElement.value
  console.log("numerical size: ", numericalSize, "unit: ", unit)

  const multiplicationAmount = getMultiplicationAmount(unit)

  const sizeInKilobytes = numericalSize * multiplicationAmount


  console.log("sizeInKilobytes", `${sizeInKilobytes}kb`)

  if(sizeInKilobytes <= 1000000){
    const pixelVersionSquare = sizeInKilobytes/2
    const squareSide = Math.sqrt(pixelVersionSquare)
  
    const visualised = document.getElementById("visualised")
    visualised.setAttribute("style", `width: ${squareSide}px; height: ${squareSide}px`)
  }
  else {
    console.log("ERROR: too big")
  }

})