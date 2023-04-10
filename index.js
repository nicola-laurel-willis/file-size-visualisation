import React from 'react';
import { createRoot } from 'react-dom/client';


const ZoomableVisualisation = () => {
  // TODO: Actually implement a navigation bar
  return (
    <>
      <h1>Hello from React!</h1>
      <div id="my-svg-container"></div>
    </>
  )
}

const domNode = document.getElementById('zoomable-visualisation')
const root2 = createRoot(domNode)
root2.render(<ZoomableVisualisation />)



