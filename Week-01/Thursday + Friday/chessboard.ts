'use strict';
export { };

let lineCount: number = 8;
let charOutput: string = '';
let evenLineIndicator: boolean = false;

for (let i : number = 1; i <= lineCount; i++) {
  charOutput = '';
  if (i % 2 === 1 || i === 1) {
    evenLineIndicator = false;
  } else { evenLineIndicator = true; }
  if (evenLineIndicator === false) {
    charOutput += '% % % % ';
  }
  else { charOutput += ' % % % %'; }
  console.log(charOutput);
}
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//