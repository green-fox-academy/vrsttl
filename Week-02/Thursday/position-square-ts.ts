'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(x, y) {
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.fillRect(x, y, 50, 50);
  ctx.moveTo(x, y);
}

for (let i: number = 0; i < 3; i++) {
  let x: number = ((Math.random() * 600) + 1);
  let y: number = ((Math.random() * 400) + 1);
  drawSquare(x, y);
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.