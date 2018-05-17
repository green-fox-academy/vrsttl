'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let rBowColors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function rainbowBox(sqSize: number, boxColor: string) {
  for (let i: number = 0; i <= rBowColors.length; i++) {
    if (i === rBowColors.length) {
      i = 0;
      ctx.fillStyle = rBowColors[i];
      ctx.beginPath();
      ctx.fillRect(300 - (sqSize / 2), 200 - (sqSize / 2), sqSize, sqSize);
      sqSize -= 20;
      ctx.moveTo(300 - (sqSize / 2), 200 - (sqSize / 2));
    }
    else if ((300 - (sqSize / 2) === 300) || (200 - (sqSize / 2) === 200)) { break; }
    else {
      ctx.fillStyle = rBowColors[i];
      ctx.beginPath();
      ctx.fillRect(300 - (sqSize / 2), 200 - (sqSize / 2), sqSize, sqSize);
      sqSize -= 20;
      ctx.moveTo(300 - (sqSize / 2), 200 - (sqSize / 2));
    }
  }
}
rainbowBox(400, rBowColors[0]);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.