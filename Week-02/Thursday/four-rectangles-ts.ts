'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomColor() {
  let letters: string = '0123456789ABCDEF';
  let color: string = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawRect() {
  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.fillRect(x, y, a, b);
}

for (let j: number = 0; j < 4; j++) {
  let x: number = ((Math.random() * 600) + 1);
  let y: number = ((Math.random() * 400) + 1);
  let a: number = ((Math.random() * 50) + 1);
  let b: number = ((Math.random() * 50) + 1);
  drawRect();
}







// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.