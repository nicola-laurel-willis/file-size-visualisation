//get size and unit from user input
//convert to kilobytes
//work out pixel dimensions to represent kilobyte size - 1000kb is represented here by 500px. I then find the square root of 500px to get the length of one side of the square.
//I get the visualised div, which I set to have the correct dimensions
const getMultiplicationAmount = unit => {
  if(unit === "b"){
    return 1
  }
  if(unit === "kb"){
    //1000^1
    return 1000 
  }
  if(unit === "mb"){
    //1000^2
    return 1000000
  }
  if(unit === "gb"){
    //1000^3
    return 1000000000
  }
}

const getSizeInBytesFromUserInput = () => {
  const sizeInputElement = document.getElementById("size")
  const unitInputElement = document.getElementById("unit")

  const size = sizeInputElement.value
  const unit = unitInputElement.value
  console.log("size: ", size, "unit: ", unit)

  const multiplicationAmount = getMultiplicationAmount(unit)
  const sizeInBytes = size * multiplicationAmount
  return sizeInBytes
}


const visualiseButton = document.getElementById("visualise-button")

visualiseButton.addEventListener("click", () => {
  const sizeInBytes = getSizeInBytesFromUserInput()

  if(sizeInBytes <= 10000001){
    const pixelVersionSquare = sizeInKilobytes/2
    const squareSide = Math.sqrt(pixelVersionSquare)
  
    const visualised = document.getElementById("visualised")
    visualised.setAttribute("style", `width: ${squareSide}px; height: ${squareSide}px`)
  }
  else {
    console.log("ERROR: too big")
  }
})