'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readLog(filePath: string) {
  try {
    return fs.readFileSync('log.txt', charEncoding);
  } catch (error) {
    console.log('Unable to read file: log.txt');
  }
}

function getUniqueIp() {
  try {
    let uniqueIP: any[] = [];
    let textData: any[] = readLog('log.txt').split(' ');
    textData.forEach(element => {
      if (element.length === 11) {
        uniqueIP.push(element);
      }
    });
    console.log(uniqueIP);
    return uniqueIP;
  }
  catch (error) { console.log('Unable to get IP adresses from log.txt.'); }
}
getUniqueIp();

function getGPRatio() {
  try {
    let uniqueIP: any[] = [];
    let textData: any[] = readLog('log.txt').split(' ');
    let getCount: number = 0;
    let postCount: number = 0;
    textData.forEach(element => {
      if (element === 'GET') {
        getCount++;
      }
      else if (element === 'POST') {
        postCount++;
      }
    });
    let getPostRatio: number = getCount / postCount;
    console.log(getPostRatio);
    return getPostRatio;
  }
  catch (error) { console.log('Unable to get IP adresses from log.txt.'); }
}
getGPRatio();





// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.