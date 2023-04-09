
const generateGrid = () => {
  const values = []
  for (let value = 1; value <= 10; value++) {
    values.push(value)
  }

  const coordinates = values.map(rowValue => {
    //array of each column value combined with the row value
      const allCoordinatesForRow = values.map(colValue => {
        return ({
          row: rowValue,
          col: colValue
        })
      })
      return allCoordinatesForRow
  })
  .flat(1)

  console.log("coordinates", coordinates)

  const gridSquareEdgeLength = 500/values.length
  const gridMain = document.body.querySelector("#grid-main")

  coordinates.map(({row, col}, index) => {

    // const gridSquare = document.createElement("div").setAttribute("id", `grid-square${x}${y}`)

    const gridSquare = document.createElement("div")
    //gridSquare.setAttribute("id", `grid-square-row-${row}-col-${col}`)
    gridSquare.setAttribute("id", "grid-square")
    
    //console.log('x: ', x, 'y: ', y)

    const distanceFromTop = (row - 1)*gridSquareEdgeLength
    const distanceFromLeft = (col - 1)*gridSquareEdgeLength


    const firstColumn = 1
    const lastColumn = values.length
    console.log("lastColumn", lastColumn)

    const firstRow = 1
    const lastRow = values.length

    const basicStyle = `width: ${gridSquareEdgeLength}px; height: ${gridSquareEdgeLength}px; top: ${distanceFromTop}px; left: ${distanceFromLeft}px`

    //gridSquare.setAttribute("style", `width: ${gridSquareEdgeLength}px; height: ${gridSquareEdgeLength}px; top: ${topValue}px`)
    gridSquare.setAttribute("style", `width: ${gridSquareEdgeLength}px; height: ${gridSquareEdgeLength}px; top: ${distanceFromTop}px; left: ${distanceFromLeft}px`)
    
    // if(col === firstColumn && row === firstRow){
    //   gridSquare.setAttribute("style", `${basicStyle}; border-left: 0px; border-top: 0px`)
    // }
    // if(col === lastColumn && row === lastColumn){

    // }

    gridMain.appendChild(gridSquare)


  })
  console.log('coordinates', coordinates)
}


window.onload = generateGrid