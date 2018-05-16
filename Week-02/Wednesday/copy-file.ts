'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let copyContent: any = 0;
let didWeMakeIt1: boolean = false;
let didWeMakeIt2: boolean = false;
let finalSuccess: boolean = false;

function readFromFile(readPath: string) {
  try {
    copyContent = fs.readFileSync(readPath, charEncoding);
    didWeMakeIt1 = true;
  } catch (error) {
    return 0;
  }
}

function writeToFile(writePath: string, copyContent) {
  try {
    fs.writeFileSync(writePath, copyContent);
    didWeMakeIt2 = true;
  }
  catch (error) {
    return 0;
  }
}

function copyToNewFile(readPath, writePath) {
  try {
    readFromFile(readPath);
    writeToFile(writePath, copyContent);
    return finalSuccess = true;
  }
  catch (error) {
    didWeMakeIt1 = false;
    return finalSuccess = false;
  }
}

if (!didWeMakeIt1 && !didWeMakeIt2) {
  console.log('We made it!');
} else {
  console.log('Try again!');
}
copyToNewFile('mytext.txt', 'copycopy.txt');

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful