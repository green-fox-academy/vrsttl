'use strict'

declare function require(path: string): any;
const fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filePath: string): string {
  try {
    return fs.readFileSync(filePath, charEncoding);
  } catch(error) {
    console.log(`Unable to read file: ${filePath}`);
    return null;
  }
}

function birthDays(filename: string): void {
  // let fileContent: string = readFromFile(filename);
  /*
  // #1
  // split('\r\n') for WINDOWS  users
  let peopleArray: string[] = fileContent.split(/[-;\n]+/);
  console.log(peopleArray);
  let temp: string[] = [];
  for (let i: number = 0; i < peopleArray.length; i++) {
    if (i % 5 === 1) {
      temp.push(peopleArray[i]);
    }
  }
  console.log(temp);
  */


  /*
  // 2
  let fileContent: string = readFromFile(filename);
  let births: object = {};
  fileContent.split('\n').forEach((element) => {
    if (element !== '') {
      let year = element.split(';')[1].slice(0, 4);
      if (births[year]) {
        births[year]++;
      } else {
        births[year] = 1;
      }
    }
  });
  let years: string[] = Object.keys(births);
  let yearCount: number[] = Object.keys(births).map((key) => {
    return births[key];
  });
  let yearCountMax: number = Math.max(...yearCount);
  return years[yearCount.indexOf(yearCountMax)];
  */


  /*
  // #3
  // split('\r\n') for WINDOWS  users
  let fileContent: string = readFromFile(filename);
  let peopleArray: string[] = fileContent.split(/[-;\n]+/);
  let temp: string[] = [];
  for (let i: number = 0; i < peopleArray.length; i++) {
    if (i % 5 === 1) {
      temp.push(peopleArray[i]);
    }
  }
  let count: object = {};
  for (let i: number = 0; i < temp.length; i++) {
    let date: string = temp[i];
    count[date] = count[date] ? count[date] + 1 : 1;
  }
  /*
  let final: any[][] = [];
  for (let year in count) {
    final.push([year, count[year]]);
    final.sort((a, b) => {
      return a[1] - b[1];
    });
  }
  return final[final.length - 1][0];
  */


  /*
  // #4...
  let fileContent: string = readFromFile(filename);
  console.log(fileContent.match(/\d{4}/gm));
  */
}

function countBirths(fileName: string) {
  let births = {};
  // split('\r\n') for WINDOWS  users
  fs.readFileSync(fileName, charEncoding).split('\n').forEach(element => {
    if (element !== '') {
      element = element.split(';')[1].slice(0, 4);
      if (births[element]) {
        births[element]++;
      } else {
        births[element] = 1;
      }
    }
  });

  return Object.keys(births).reduceRight((a, b) => births[a] > births[b] ? a : b);
}

// birthDays('births.csv');
console.log(countBirths('births.csv'));