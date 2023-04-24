# file-size-visualisation

# Try it out

https://nicola-laurel-willis.github.io/file-size-visualisation/ Here is the project in its current state (unfinished!). The yellow box represents a gigabyte, then blue, pink, cyan for mb, kb, b. 

# About the project

A project to visualise the differences in scale between bytes, kilobytes, megabytes and gigabytes, while also giving me an opportunity to refresh my web development skills.

It surprised me just how big the difference in size is between say a 15 kb word document and a 1.2 mb JPEG image. The difference was truly massive. Doing this project has really given me a new sense of how much space different files in my computer are. It has certainly made me view those 1.28 gb psd files in my art folder in a whole new light!

# Journey to get to this stage of the project

It was a winding journey from the initial idea through to what I've made now. I wasn't sure from the beginning how the visualisation would look. It can be difficult trying to think about design at the same time as working out the technicalities of how to build something. I realised I'd have to try things in order to make any progress. I haven't covered everything in these bullet points, but it captures some of it.

- I initially generated a grid out of thousands of divs on the DOM - very slow!
- I scrapped the grid idea for the moment and instead had a go at just visualising the size relationships through a div for a kb, a larger div for a mb, etc.
- I didn't realise how big the differences in scale would be: only once I tried it out and made a static visual representation with an incredibly tiny div for a kilobyte and then increasingly large divs did I realise that it would be impossible to fit on the screen.
- I then realised that I'd need to do something that I could zoom in on. This led me to think about using SVGs.
- Initially I used this plugin https://github.com/bumbu/svg-pan-zoom, but I wanted to come up with something myself
- After some research I found that you could create the effect of zooming in and out using the viewbox property: https://codepen.io/yoksel/pen/yobqYY.
- I realised I'd need a grid of some sort to help the viewer have a feeling of the scale. I had to make some design decisions about whether the grid would be precise, the gridsquares representing actual sizes, or whether the grid would just be a visual aid to give you a sense of scale as you zoom in (as it is here: https://observablehq.com/@martin-pi/zoomable-pannable-svg-grid-patterns).
- I then had to figure out how to actually generate an SVG grid. I found some interesting ways others had done it, such as here: https://observablehq.com/@mootari/svg-single-path-grid. In the end I found a really helpful tutorial and/or codepen that showed how to create a pattern with SVG.js, and it helped me figure out how to create my grid. Unfortunately I can't currently remember where it was, but if I find it I will put it here.
- I found it was getting complicated trying to reason about the zoom, so I thought it would be a good idea to use React, because React gives a really nice clear way of thinking about state. I integrated React into my project, and once I'd built a React component to handle the zoom, things were a lot clearer.
- I had to learn how to use the new React and re-learn how to think in React after a break of 2 years. 

# Other technical learnings

Other challenges included figuring out how to view my work locally while working. In the end I used vscode-preview-server which has worked well. I also had to figure out how to use es6 javascript modules with my html - I used esbuild. This stuff might sound really basic, but I have been used to using tools like React where all of this comes included. When I was working as a developer for a company, all of this stuff was set up in the codebase from the beginning, and I'd never had to set up a project from fresh in this way.

I used vectr.com near the beginning to experiment with making SVGs and to try to understand how they were working. I later switched from trying to understand how to work with SVG code directly to generating SVGs using the SVG.js library.

I found this stackoverflow thread helpful when trying to figure out how I might zoom in on an SVG: https://stackoverflow.com/questions/52576376/how-to-zoom-in-on-a-complex-svg-structure. It pointed me to this codepen https://codepen.io/yoksel/pen/yobqYY which demonstrated really clearly how viewbox works and how it can allow you to "zoom".

# Next steps

- I'm currently working on allowing the user to zoom by pressing and holding the button. I found this https://dirask.com/posts/React-mouse-button-press-and-hold-example-pzrAap really helpful to point me to the way one might do this, and I'm currently getting a deeper understanding of using the React useEffect and useRef hooks and thinking through how it works.

- I've also been thinking about how to generate the grids in my visualisation. With the project in its current state, the grid lines are generated once at the beginning. Because of the huge differences in scale as you zoom in, your very thin gridlines representing gigabyte-scales get HUGE when you zoom in to the kilobyte and byte levels. I'm thinking about generating gridlines dynamically as part of the zooming mechanism.

- Fixing the issue with the error message when you zoom in or out too far - currently the error message sticks around after you start to zoom back in or out within the acceptable bounds of the zoom. This needs to be thought through.

# Good technologies for creating visualisations that zoom

d3.js seems perfect for something like this. I discovered it part way through working on this project, but I wanted to continue without it for now because I wanted to be able to show off the hard work I'd put in to try to figure out how to do it on my own.

Here is a good example of an infinite zoomable SVG grid pattern made using d3: https://observablehq.com/@martin-pi/zoomable-pannable-svg-grid-patterns

Here is a Javascript library for zooming and panning on SVGs: https://github.com/bumbu/svg-pan-zoom 


