'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let boxArray: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let theseArray: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function drawTheLine(x: number[][]) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(x[0][0], x[0][1]);
  ctx.lineTo(x[1][0], x[1][1]);
  ctx.lineTo(x[2][0], x[2][1]);
  ctx.lineTo(x[3][0], x[3][1]);
  ctx.lineTo(x[0][0], x[0][1]);
  ctx.stroke();
}
drawTheLine(boxArray);

function drawSecondOne(x: number[][]) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(x[0][0], x[0][1]);
  ctx.lineTo(x[1][0], x[1][1]);
  ctx.lineTo(x[2][0], x[2][1]);
  ctx.lineTo(x[3][0], x[3][1]);
  ctx.lineTo(x[4][0], x[4][1]);
  ctx.lineTo(x[5][0], x[5][1]);
  ctx.lineTo(x[6][0], x[6][1]);
  ctx.lineTo(x[7][0], x[7][1]);
  ctx.lineTo(x[0][0], x[0][1]);
  ctx.stroke();
}
drawSecondOne(theseArray);


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]