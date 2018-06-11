'use strict';

let numberArray: number[] = [5, 2, 8, -1];

function getTrickyAvg(numberArray: number[]) {
  let workingArrayOdd: number[] = [];
  let workingArrayEven: number[] = [];
  for (let i: number = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      workingArrayEven.push(numberArray[i]);
    } else {
      workingArrayOdd.push(numberArray[i]);
    }
  }
  let minimum: number = workingArrayEven[0];
  for (let i: number = 1; i < workingArrayEven.length; i++) {
    if (workingArrayEven[i] < minimum) {
      minimum = workingArrayEven[i];
    }
  }
  let maximum: number = workingArrayOdd[0];
  for (let i: number = 1; i < workingArrayOdd.length; i++) {
    if (workingArrayOdd[i] > maximum) {
      maximum = workingArrayOdd[i];
    }
  }
  return (maximum + minimum) / 2;
}
console.log(getTrickyAvg(numberArray));

/** 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */


/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;
