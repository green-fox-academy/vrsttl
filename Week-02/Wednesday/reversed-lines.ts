'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readLog(filePath: string) {
  try {
    return fs.readFileSync('reversed-lines.txt', charEncoding);
  } catch (error) {
    console.log('Unable to read file: reversed-lines.txt');
  }
}
function appendLineBreak(output: any[]) {
  output.forEach(element => {
    element.push('\r\n');
    return element;
  });
}
function decrypt() {
  try {
    let rawText: any[] = readLog('reversed-lines.txt').split('\r\n');
    let output: any[] = [];
    let workingArray: any[] = [];
    let letsPrintThis: string[] = [];
    rawText.forEach(rawText => {
      workingArray.push(rawText.split(''));
    });
    workingArray.forEach(workingArray => {
      output.push(workingArray.reverse());
    });
    appendLineBreak(output);
    output.forEach(output => {
      letsPrintThis = letsPrintThis + output.join('');
    });
    console.log(letsPrintThis);
  }
  catch (error) {
    return 0;
  }
}
decrypt();
// Create a method that decrypts reversed-lines.txt