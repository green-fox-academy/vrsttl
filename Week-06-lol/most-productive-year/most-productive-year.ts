'use strict'
export { };
declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string): string {
  try {
    return fs.readFileSync(`${filePath}.csv`, charEncoding);
  } catch (error) {
    console.log(`Cannot find studio, please try again later.`);
    return null;
  }
}

function findMostProductiveYear(filePath): string {
  let splitText: string = readFromFile(filePath);
  let workingString: string[] = [];
  let wordString: string[] = [];
  let yearCollection: string[] = [];
  let years: number[] = [];
  let counting: object = {};
  if (splitText !== null) {
    splitText.split('\r\n').forEach(element => {
      workingString.push(element);
      element.split(',').forEach(element => {
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
  let maxYear: number = 0;
  for (let i: number = 0; i < years.length; i++) {
    if (counting[Object.keys(counting)[i]] > counting[Object.keys(counting)[i - 1]]) {
      maxYear = parseInt(Object.keys(counting)[i]);
    }
  }
  return `${filePath} made the most movies in ${maxYear}`;
}

console.log(findMostProductiveYear('paramount'));
/** 
 * Write a function called `findMostProductiveYear` that helps you find the most productive year for a film studio.
 * The function should take one argument, which is the name of the film studio.
 * The function should try to open the related data file named `studioname`.csv,
 * which is a comma separated file with 3 columns: name of the movie, release year, director
 * 
 *  - If we do not have any data about the studio, the function should return an error message.
 *  - If we have found data, the function should return an information message about the most productive year for studio.
 * 
 * Examples:
 *  - If we call the function with 'marvel'
 *  - should return 'marvel has made the most movies in 2017.'
 * 
 *  - If we call the method with 'ghibli':
 *  - should print, 'Cannot find studio, please try again later.'.
 * 
 * Hint: 
 *  - You can find some example files in this folder. (marvel.csv, paramount.csv)
 *  - Most productive year: The year in which the studio has made the most movies.
 */


/********************************
 * Do not modify the code below *
 ********************************/
export default findMostProductiveYear;
