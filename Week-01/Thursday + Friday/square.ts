'use strict';

let lineCount: number = 16;
let columnCount: number = lineCount - 1;
let charOutput: string = '';
let spaceCount: number = columnCount - 2;



for (let i: number = 1; i <= lineCount; i++) {
  charOutput = '';
  if (i === 1 || i === lineCount) {
    for (let k: number = 0; k <= columnCount; k++) {
      charOutput += '%';
    }
  }
  else if (i !== 1 || i !== lineCount) {
    charOutput += '%';
    for (let m: number = 0; m <= spaceCount; m++) {
      charOutput += ' ';
    }
    charOutput += '%';
  }
  console.log(charOutput);
}
// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is