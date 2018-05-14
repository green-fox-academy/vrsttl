"use strict";
export { };
let param: number = 15;
let result: number = 0;

function sum(param) {
  for (let i: number = 0; i <= param; i++) {
    result = result + i;
  }
  return result;
}
console.log(sum(param));
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result