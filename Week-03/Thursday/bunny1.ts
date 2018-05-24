'use strict';
export { };

function bunnyEars(n: number): number {
  let bucketThatIThrowTheCutOffEarsInto: number = 0;
  if (n <= 0) {
    return 0;
  } else {
    bucketThatIThrowTheCutOffEarsInto += 2;
    return bucketThatIThrowTheCutOffEarsInto + bunnyEars(n -1);
  };
}
console.log(bunnyEars(100));

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).