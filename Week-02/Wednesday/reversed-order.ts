'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readLog(filePath: string) {
  try {
    return fs.readFileSync('reversed-order.txt', charEncoding);
  } catch (error) {
    console.log('Unable to read file: reversed-order.txt');
  }
}

function decrypt() {
  try {
    let rawText: any[] = readLog('reversed-order.txt').split('\r\n');
    let output: any[] = [];
    output = rawText.reverse();
    console.log(output.join('\r\n'));
  }
  catch (error) {
    return 0;
  }
}
decrypt();