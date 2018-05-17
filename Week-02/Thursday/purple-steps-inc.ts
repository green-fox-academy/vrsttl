
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleSteps(size: number, start_X: number, start_Y) {
  let grower: number = 1;
  for (let i: number = 0; i < 6; i++) {
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.fillRect(start_X, start_Y, size * grower, size * grower);
    start_X = start_X + size * grower;
    start_Y = start_Y + size * grower;
    grower++;
  }
}
purpleSteps(10, 0, 0);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]