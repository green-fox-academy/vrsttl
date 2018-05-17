'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let randomGrey: any[] = ['#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F'];
function getRandomGrey() {
  let color: string = '';
  color += randomGrey[Math.floor(Math.random() * 9)];
  return color;
}

function drawRect() {
  ctx.fillStyle = getRandomGrey();
  ctx.beginPath();
  ctx.fillRect(x, y, a, b);
}

let starNumber: number = ((Math.random() * 400) + 1)

for (let j: number = 0; j < starNumber; j++) {
  let x: number = ((Math.random() * 600) + 1);
  let y: number = ((Math.random() * 400) + 1);
  let a: number = ((Math.random() * 5) + 1);
  let b: number = a;
  drawRect();
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)