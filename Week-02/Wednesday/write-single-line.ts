'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function writeSingleLine(filePath: string, content: string) {
  try {
    fs.writeFileSync(filePath, content);
  }
  catch (error) {
    console.log(`Unable to write file: ${filePath}`);
  }
}
writeSingleLine('myFirstTest.txt', 'Attila Veres');
// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
