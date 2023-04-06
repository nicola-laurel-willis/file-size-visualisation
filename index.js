
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

console.log("windowWidth", windowWidth)
console.log("windowHeight", windowHeight)



// on clicking #visualise-button, get the value of #value and #unit

const sizeValue = document.getElementById("size-value")
const sizeUnit = document.getElementById("size-unit")


const visualiseButton = document.getElementById("visualise-button")
visualiseButton.addEventListener("click", () => {
  console.log("sizeValue", sizeValue.value)
  console.log("sizeUnit", sizeUnit.value)

  const sizeValue2 = sizeValue.value
  const sizeUnit2 = sizeUnit.value

  let ultimateValue
  if(sizeUnit2 === "kb"){
    ultimateValue = sizeValue2
  }
  if(sizeUnit2 === "mb"){
    ultimateValue = sizeValue2*1000
  }
  if(sizeUnit2 === "gb"){
    ultimateValue = sizeValue2*1000000
  }

  console.log("ultimateValue", `${ultimateValue}kb`)

  if(ultimateValue <= 1000000){
    const pixelVersionSquare = ultimateValue/2
    const squareSide = Math.sqrt(pixelVersionSquare)
  
    const visualised = document.getElementById("visualised")
    visualised.setAttribute("style", `width: ${squareSide}px; height: ${squareSide}px`)
  }
  else {
    console.log("ERROR: too big")
  }

})