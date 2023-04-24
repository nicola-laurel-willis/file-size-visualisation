# file-size-visualisation

# Try it out

https://nicola-laurel-willis.github.io/file-size-visualisation/ Here is the project in its current state (unfinished!). The yellow box represents a gigabyte, then blue, pink, cyan for mb, kb, b. 

# About the project

A project to visualise the differences in scale between bytes, kilobytes, megabytes and gigabytes, while also giving me an opportunity to refresh my web development skills.

It surprised me just how big the difference in size is between say a 15 kb word document and a 1.2 mb JPEG image. The difference was truly massive. Doing this project has really given me a new sense of how much space different files in my computer are. It has certainly made me view those 1.28 gb psd files in my art folder in a whole new light!

# Journey to get to this stage of the project

It was a winding journey from the initial idea through to what I've made now. I wasn't sure from the beginning how the visualisation would look. It can be difficult trying to think about design at the same time as working out the technicalities of how to build something. I realised I'd have to try things in order to make any progress. I haven't covered everything in these bullet points, but it captures some of it.

- To make a start, I initially generated a grid out of thousands of divs on the DOM - it was very slow!
- I scrapped the grid idea for the moment and instead had a go at just visualising the size relationships through a div for a kb, a larger div for a mb, etc.
- I didn't realise how big the differences in scale would be: only once I tried it out and made a static visual representation with an incredibly tiny div for a kilobyte and then increasingly large divs did I realise that it would be impossible to fit on the screen.
- I then realised that I'd need to do something that I could zoom in on. This led me to think about using SVGs.
- Initially I used this plugin https://github.com/bumbu/svg-pan-zoom, but I wanted to come up with something myself.
- After some research I found that you could create the effect of zooming in and out using the viewbox property.
- I realised I'd need a grid of some sort to help the viewer have a feeling of the scale. I had to make some design decisions about whether the gridsquares would represent the actual sizes, or whether the grid would just be a visual aid to give you a sense of scale as you zoom in - as it is in [this](https://observablehq.com/@martin-pi/zoomable-pannable-svg-grid-patterns) very nice example.
- I then had to figure out how to actually generate an SVG grid. I found some interesting ways others had done it, such as [here](https://observablehq.com/@mootari/svg-single-path-grid). In the end I found a really helpful tutorial and/or codepen that showed how to create a pattern with SVG.js, and it helped me figure out how to create my grid. Unfortunately I can't currently remember where it was, but if I find it I will put it here.
- I found it was getting complicated trying to reason about the zoom, so I thought it would be a good idea to use React, because React gives a really nice clear way of thinking about things involving state and interactivity. I integrated React into my project, and once I'd built a React component to handle the zoom, things were a lot clearer.
- I had to learn how to use the new React and re-learn how to think in React after a break of 2 years. I'm currently thinking through how to zoom when the user clicks and holds a button. 

# Other technical learnings

- Something I had to work out at the beginning was how to view my work locally while working - it sounds basic, but I've just not done many small projects like this from scratch so I hadn't really had to think about this. In the end I used vscode-preview-server which has worked well. 
- I also had to figure out how to use ES6 javascript modules with my HTML. I used esbuild. It bundles your code up for you!
- I used [Vectr](https://vectr.com/) near the beginning to generate some SVGs to practice zooming on, and just to try to understand a bit better how SVGs work. It was a helpful tool.
- I later switched to generating SVGs using the SVG.js library, which made things very easy.
- I found [this stackoverflow thread](https://stackoverflow.com/questions/52576376/how-to-zoom-in-on-a-complex-svg-structure) helpful when trying to figure out how I might zoom in on an SVG. It pointed me to [this codepen](https://codepen.io/yoksel/pen/yobqYY). That codepen visually demonstrates the use of viewbox very helpfully.

# Next steps

- I'm currently working on allowing the user to zoom by pressing and holding the button. I found [this article and component example](https://dirask.com/posts/React-mouse-button-press-and-hold-example-pzrAap) really helpful to point me to the way one might do this.

- I'm thinking about generating gridlines dynamically as you zoom in and out rather than once at the beginning. In my current project, the grid lines are generated once at the beginning. Because of the huge differences in scale as you zoom, your very thin gridlines representing gigabyte-scales become HUGE when you zoom in down to the kilobyte and byte levels.

- I need to fix the issue with the message to the user when you zoom in or out too far - currently the error message sticks around after you start to zoom back in or out within the acceptable bounds of the zoom.

# Good technologies for creating visualisations that zoom

d3.js seems perfect for something like this. I discovered it part way through working on this project, but I wanted to continue without it for now because I wanted to be able to show off the hard work I'd put in to try to figure out how to do it on my own.

