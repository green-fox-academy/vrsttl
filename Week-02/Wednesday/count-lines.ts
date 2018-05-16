'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let numberOfLines: number = 0;

function readFromFile(filePath: string) {
  try {
    let lineCounterString: any = fs.readFileSync('my-tfgjt.txt', charEncoding);
    let content = lineCounterString.split('\r\n');
    console.log(content.length);
  }
  catch (error) {
    return 0;
  }
}
readFromFile('my-text.txt');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.