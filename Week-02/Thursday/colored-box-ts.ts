'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle ='green';
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(50, 0);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ='red';
ctx.moveTo(50,0);
ctx.lineTo(50, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ='blue';
ctx.moveTo(50, 50);
ctx.lineTo(0, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ='yellow';
ctx.moveTo(0, 50);
ctx.lineTo(0, 0);
ctx.stroke();


// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.
