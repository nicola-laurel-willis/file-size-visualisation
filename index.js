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

const numericalSizeInputElement = document.getElementById("numerical-size")
const unitInputElement = document.getElementById("unit")

const visualiseButton = document.getElementById("visualise-button")

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