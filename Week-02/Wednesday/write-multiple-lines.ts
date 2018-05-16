'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function writeMultiLines(filePath: string, content: string, lineCount: number) {
  try {
    if (lineCount !== 0) {
      for (let i: number = 0; i < lineCount; i++) {
        fs.appendFileSync(filePath, content + '\r\n');        
      }
    }
  }
  catch (error) {
    return 0;
  }
}
writeMultiLines('newMulti.txt', 'Attila', 5);

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.