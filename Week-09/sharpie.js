'use strict';

function Sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function () {
    this.inkAmount -= this.width;
  };
}

let sharpie = new Sharpie('black', 10);
do {
  sharpie.use();
  console.log(sharpie.inkAmount);
} while (sharpie.inkAmount >= sharpie.width);