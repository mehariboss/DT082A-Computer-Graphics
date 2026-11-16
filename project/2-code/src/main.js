"use strict";
// Startpunkt för projektet: en roterande färgad triangel.
// Bygg vidare härifrån (modeller, kamera, ljus, interaktion ...).

let gl;
let program;
let theta = 0.0;          // rotationsvinkel i grader
let uModelViewLoc, uProjectionLoc;

window.onload = function init() {
  const canvas = document.getElementById("gl-canvas");
  gl = canvas.getContext("webgl");
  if (!gl) { alert("WebGL isn't available"); return; }

  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.1, 0.1, 0.1, 1.0);
  gl.enable(gl.DEPTH_TEST);

  program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);

  // Geometri: tre hörn och en färg per hörn
  const positions = [
    vec4(-0.5, -0.5, 0.0, 1.0),
    vec4( 0.5, -0.5, 0.0, 1.0),
    vec4( 0.0,  0.5, 0.0, 1.0)
  ];
  const colors = [
    vec4(1.0, 0.0, 0.0, 1.0),
    vec4(0.0, 1.0, 0.0, 1.0),
    vec4(0.0, 0.0, 1.0, 1.0)
  ];

  sendAttribute(positions, "aPosition", 4);
  sendAttribute(colors, "aColor", 4);

  uModelViewLoc  = gl.getUniformLocation(program, "uModelViewMatrix");
  uProjectionLoc = gl.getUniformLocation(program, "uProjectionMatrix");

  // Kamera: perspektivprojektion (Lecture 5)
  const aspect = canvas.width / canvas.height;
  gl.uniformMatrix4fv(uProjectionLoc, false, flatten(perspective(45, aspect, 0.1, 100)));

  render();
};

// Lägger data i en buffer på grafikkortet och kopplar den till ett attribut i shadern (Lecture 2)
function sendAttribute(data, name, size) {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(data), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(program, name);
  gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(loc);
}

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  theta += 1.0;
  // Flytta bak kameran och rotera triangeln runt y-axeln (Lecture 4)
  let mv = lookAt(vec3(0, 0, 3), vec3(0, 0, 0), vec3(0, 1, 0));
  mv = mult(mv, rotateY(theta));
  gl.uniformMatrix4fv(uModelViewLoc, false, flatten(mv));

  gl.drawArrays(gl.TRIANGLES, 0, 3);
  requestAnimationFrame(render);   // double buffering + animation (Lecture 3)
}
