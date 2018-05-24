'use strict';
export { };


function sumDigit(n: number): number {
  let workingNumber: number = 0;
  if (n <= 0) {
    return 0;
  } else {
    return (Math.floor(n % 10) + sumDigit(n / 10));
  };
}
console.log(sumDigit(123564473467));

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).