'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 0;
let y: number = 0;
let a: number = 20;

function black(x, y, a) {
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.fillRect(x, y, a, a);
}

function oddColumn() {
  for (let j: number = 0; j <= 10; j++) {
    black(x, y, a);
    y = y + a * 2;
    ctx.moveTo(x, y);
    if (j === 10) {
      y = 0;
    }
  }
}

function evenColumn() {
  for (let i: number = 0; i <= 10; i++) {
    y = y + a;
    ctx.moveTo(x, y);
    black(x, y, a);
    y = y + a;
    if (i === 10) {
      y = 0;
    }
  }
}

for (let m: number = 1; m <= 30; m++) {
  if (m % 2 === 1 || m === 1) {
    oddColumn();
  } else {
    evenColumn();
  }
  x = x + a;
}



// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.