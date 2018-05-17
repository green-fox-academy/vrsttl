'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineDrawer(x: number, y: number){
  
  for(let i: number = 0; i <3; i++){
  ctx.strokeStyle ='red';
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(300, 200);
  ctx.stroke();
  x += 50;
  y +=50;
  }
}
lineDrawer(20,20);

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.