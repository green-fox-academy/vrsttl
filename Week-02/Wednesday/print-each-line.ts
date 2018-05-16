'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync('my-text.txt', charEncoding);
  } catch (error) {
    console.log('Unable to read file: my-file.txt');
  }
}
readFromFile('my-file.txt');

function doSomeThing() {
  let exercise: string = readFromFile('my-file.txt');
  if (exercise !== null) {
    let content = exercise.split('\r\n').forEach(element => {
      console.log(element);
    });
  }
}

doSomeThing();






// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'