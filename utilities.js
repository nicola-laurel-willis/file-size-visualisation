const getEmbeddedSvgElement = (svgObjectId, svgElementId) => {
  const svgDocument = document.getElementById(svgObjectId).contentDocument
  const svgElement = svgDocument.getElementById(svgElementId)
  return svgElement
}

export { getEmbeddedSvgElement }