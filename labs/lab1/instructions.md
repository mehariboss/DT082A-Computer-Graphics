# Lab 1 – Programming in WebGL

**Course:** DT082A Computer Graphics
**Due:** Wed, 25 Nov 2026 23:59
**Points:** 1 · Unlimited attempts allowed

## Task

Implement a 3D cube with corners defined in clipping coordinates at (-0.5, -0.5, -0.5) and (0.5, 0.5, 0.5). The axis-aligned cube should represent the RGB colorspace such that its x-axis defines the amount of red, y-axis the amount of green, and z-axis the amount of blue respectively. That is, the cube should be colored so that the vertex:

- at (-0.5, -0.5, -0.5) is black (red = green = blue = 0),
- at (-0.5, 0.5, -0.5) is green (red = 0, green = 1, blue = 0),
- at (0.5, 0.5, -0.5) is yellow (red = 1, green = 1, blue = 0),
- at (0.5, 0.5, 0.5) is white (red = green = blue = 1)

and so forth.

Rotate the cube spin such that a three point perspective is achieved, i.e. where three faces are presented to the observer simultaneously.

If time allows, add as many of the computer graphics aspects that has been discussed so far as you find interesting.

Any other information that you find to be necessary for you to solve the task, in addition to what is explicitly specified above, is for you to define and present in the PM.

## Deliverable

1. Submit your code in a zip archive that is self-contained and where the implementation may be run by unzipping the files and opening the html-file in a browser.
2. Attach a 1–2 page long PM describing your process solving the task (how did it go, obstacles, design choices, defined prerequisites you found necessary, lessons learned etc.)

## Supporting material

Prepare by viewing video lectures 2.1–2.4, and read *Interactive Computer Graphics with WebGL* Chapter 3.1.1 and 4.6–4.6.7 for inspiration.
