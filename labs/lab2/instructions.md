# Lab 2 – Interactivity

**Course:** DT082A Computer Graphics
**Due:** Thu, 3 Dec 2026 23:59
**Points:** 1 · Unlimited attempts allowed

## Task

Extend the 3D cube implementation from lab 1 with multiple objects and interactivity using the following added functionality:

- Include N-1 more cubes in the world making it N in total, spaced out so they don't touch but still remain clear in the camera view. The number N should be possible to change using a slider in the range from N=1 to N=16. Feel free to vary the visual properties of the three cubes (e.g. color, size, rotation) in any way you find suitable to make them distinguishable from each other.
- An interactive camera view controller operated by mouse click plus motion in an extended trackball fashion. That is, left mouse click and motion rotates the camera, shift key plus mouse button and motion pans the camera, and mouse scroll wheel zooms the camera, i.e. changes its focal length.
- A reset button that returns the camera view to an original state.

Any other information you find to be necessary for you to solve the task is for you to define.

## Deliverable

1. Submit your code in a zip archive that is self-contained and where the implementation may be run by unzipping the files and opening the html-file in a browser.
2. Attach a 1–2 page long PM describing your process solving the task (how did it go, obstacles, design choices, defined prerequisites you found necessary, lessons learned etc.)

## Supporting material

- https://webglfundamentals.org/webgl/lessons/webgl-visualizing-the-camera.html
- https://webglfundamentals.org/webgl/lessons/webgl-instanced-drawing.html
- See chapter 4.13.2–4.13.4 in *Interactive Computer Graphics with WebGL* for discussions on trackball functionality and implementation.
