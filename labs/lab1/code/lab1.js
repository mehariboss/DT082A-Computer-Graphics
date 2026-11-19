"use strict";

var gl;

window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext("webgl");

    if (!gl) { alert("WebGL isn't available"); return; }

    gl.enable(gl.SCISSOR_TEST);                          // slå på "saxen"
    gl.viewport(0,0, canvas.width, canvas.height);

    gl.clearColor(1.0, 0, 0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
};
