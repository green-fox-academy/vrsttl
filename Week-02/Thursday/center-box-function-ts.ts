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

function centerSquare(sqSize) {
  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.fillRect(300 - (sqSize / 2), 200 - (sqSize / 2), sqSize, sqSize);
  ctx.moveTo(x, y);
}
for (let i: number = 0; i <= 3; i++) {
  let x: number = ((Math.random() * 600) + 1);
  let y: number = ((Math.random() * 400) + 1);
  centerSquare(Math.random() * 250 +1);
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.