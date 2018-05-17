'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleSteps(size: number, start_X: number, start_Y) {
  for (let i: number = 0; i <= 19; i++) {
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.fillRect(start_X, start_Y, size, size);
    start_X = start_X + size;
    start_Y = start_Y + size;
  }
}
purpleSteps(20, 0, 0);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]