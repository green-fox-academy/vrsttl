'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string) {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch (error) {
    console.log(`Unable to read file: ${filePath}`);
  }
}

function yearsOfMostBirths(filePath) {
  let splitText: string = readFromFile(filePath);
  let workingString: string[] = [];
  let wordString: string[] = [];
  let yearCollection: string[] = [];
  let years: number[] = [];
  let counting = {};
  if (splitText !== null) {
    splitText.split('\r\n').forEach(element => {
      workingString.push(element);
      element.split(';').forEach(element => {
        wordString.push(element);
      });
    });
  }
  for (let i: number = 0; i < wordString.length; i++) {
    if (i % 3 === 1) {
      yearCollection.push(wordString[i]);
    }
  }
  yearCollection.forEach(element => {
    years.push(parseInt(element.slice(0, 4)));
  });
  years.forEach(function (x) { counting[x] = (counting[x] || 0) + 1; });

  let maxNumber: number = 0;
  let maxYear: number = 0;
  let maxYearArray: number[] = [];
  for (let i: number = 0; i < years.length; i++) {
    if (counting[Object.keys(counting)[i]] > counting[Object.keys(counting)[i - 1]]) {
      maxNumber = counting[Object.keys(counting)[i]];
      maxYear = parseInt(Object.keys(counting)[i]);
      if (counting[Object.keys(counting)[i]] === 5) {
        maxYearArray.push(parseInt(Object.keys(counting)[i]));
      }
    }
  }
  return maxYearArray;
}

console.log(yearsOfMostBirths('births.csv'));

    // Create a function that
    // - takes a filename as a parameter,
    // - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
    // - returns the year when the most births happend.
    // You can find such a csv file in this directory: births.csv
    // If you pass births.csv to your function, the result should be 2006.