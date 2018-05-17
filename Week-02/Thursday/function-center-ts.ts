'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let pixelDist: number = 20;
let x: number = 0;
let y: number = 0;
let a: number = 300;
let b: number = 200;

function drawTheLine(x: number, y: number) {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(x, y);
  ctx.lineTo(a, b);
  ctx.stroke();
}

for (let i: number = 0; i <= 600 / pixelDist; i++) {
  drawTheLine(x, y)
  x = x + pixelDist;
  if (i === 600 / pixelDist) {
    for (let j: number = 0; j <= 400 / pixelDist; j++) {
      drawTheLine(x, y);
      y = y + pixelDist;
      if (j === 400 / pixelDist) {
        for (let k: number = 0; k <= 600 / pixelDist; k++) {
          drawTheLine(x, y);
          x = x - pixelDist;
          if (k === 600 / pixelDist) {
            for (let l: number = 0; l <= 400 / pixelDist; l++) {
              drawTheLine(x, y);
              y = y - pixelDist;
            }
          }
        }
      }
    }
  }
}
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
