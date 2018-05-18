'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let pixelDist: number = 20;
let x: number = canvas.width / 2;
let y: number = 0;
let a: number = canvas.width / 2 + pixelDist;
let b: number = canvas.height / 2;

function envStar() {

  for (let i: number = 1; i <= canvas.width / 2 / pixelDist; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
    y += pixelDist;
    a += pixelDist;
  }
  x = canvas.width;
  y = canvas.height / 2;
  a = canvas.width / 2;
  b = canvas.height / 2 + pixelDist;
  for (let i: number = 0; i <= canvas.width / 2 / pixelDist; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
    x -= pixelDist;
    b += pixelDist;
  }
  x = canvas.width / 2;
  y = canvas.height;
  a = canvas.width / 2 - pixelDist;
  b = canvas.width / 2;
  for (let i: number = 1; i <= canvas.width / 2 / pixelDist; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
    y -= pixelDist;
    a -= pixelDist;
  }
  x = 0;
  y = canvas.height / 2;
  a = canvas.width / 2;
  b = canvas.width / 2 - pixelDist;
  for (let i: number = 0; i <= canvas.width / 2 / pixelDist; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
    x += pixelDist;
    b -= pixelDist;
  }
}

envStar();
/*
function lowerArc() {
  for (let i: number = 0; i <= canvas.width / pixelDist; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
    y = y + pixelDist;
    a = a + pixelDist;
  }
}
upperarc();
x = 0;
y = 0;
a = pixelDist;
b = canvas.height;
lowerArc();
*/

