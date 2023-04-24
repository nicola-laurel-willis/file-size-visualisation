# file-size-visualisation

A project to visualise the differences in scale between bytes, kilobytes, megabytes and gigabytes, while also giving me an opportunity to refresh my coding skills.

It surprised me just how big the difference in size is between say a 15 kb word document and a 1.2 mb JPEG image. The difference was truly massive. Doing this project has really given me a new sense of how much space different files in my computer are. It has certainly made me view those 1.28 gb psd files in my art folder in a whole new light!

The initial spark that started this project wasn't actually really understanding the immensity of the differences in scale - that was something I only discovered after I made it. What started it was my frustration at never remembering which was bigger, which order they came in - kb, mb, gb? I thought it would be useful to me and many other people to have a tool they could use to see them visually.

Building this project has thrown up lots of interesting challenges for me technically, including understanding viewbox and viewport on SVGs, and learning how to use the new React after not using it for over 2 years.

I used vectr.com near the beginning to experiment with making SVGs and to try to understand how they were working. I later switched from trying to understand how to work with SVG code directly to generating SVGs using SVG.js library, which I found really helpful because learning how to write SVGs from scratch was just taking too much time and I had too many other things to think about.

I found this stackoverflow thread helpful when trying to figure out how I might zoom in on an SVG: https://stackoverflow.com/questions/52576376/how-to-zoom-in-on-a-complex-svg-structure. It pointed me to this codepen https://codepen.io/yoksel/pen/yobqYY which demonstrated really clearly how viewbox works and how it can allow you to "zoom".

# Next steps

I'm currently working on allowing the user to zoom by pressing and holding the button. I found this https://dirask.com/posts/React-mouse-button-press-and-hold-example-pzrAap really helpful to point me to the way one might do this, and I'm currently getting a deeper understanding of using the React useEffect and useRef hooks and thinking through how it works.

I've also been thinking about how to generate the grids in my visualisation. With the project in its current state, the grid lines are generated once at the beginning. Because of the huge differences in scale as you zoom in, your very thin gridlines representing gigabyte-scales get HUGE when you zoom in to the kilobyte and byte levels. I'm thinking about generating gridlines dynamically as part of the zooming mechanism.

# Good technologies for creating visualisations that zoom

d3.js seems like a great solution. I discovered it part way through working on this project, but I wanted to continue without it for now because I wanted to be able to show off the hard work I'd put in to try to figure out how to do it on my own!

Here is a good example of an infinite zoomable SVG grid pattern made using d3: https://observablehq.com/@martin-pi/zoomable-pannable-svg-grid-patterns


