'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readLog(filePath: string) {
  try {
    return fs.readFileSync('duplicated-chars.txt', charEncoding);
  } catch (error) {
    console.log('Unable to read file: duplicated-chars.txt');
  }
}

function decrypt() {
  try {
    let rawText: string[] = readLog('duplicated-chars.txt').split('');
    let output: any[] = [];
    for (let i: number = 0; i <= rawText.length; i++) {
      if (i % 2 !== 0) {
        output.push(rawText[i]);
      }
    }
    console.log(output.join(''));
    return output.join();
  }
  catch (error) {
    return 0;
  }
}
decrypt();

// Create a method that decrypts duplicated-chars.txt