'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let pixelDist: number = 10;
let x: number = canvas.width;
let y: number = canvas.height - pixelDist;
let a: number = canvas.width - pixelDist;
let b: number = 0;

function canvasDivider(division: number){
  x = x/(division*2);
  y = y/(division*2);
  a = a/(division*2);
  for(let i: number = 0; i <=division; i++){
    upperarc();
    x = 0;
    y = 0;
    a = pixelDist;
    b = canvas.height;
    lowerArc();
    if (a !==0){

    }
  }

}

function upperarc() {
  for (let i: number = 0; i <= canvas.width / pixelDist; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
    y = y - pixelDist;
    a = a - pixelDist;
  }
}

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
lowerArc();


