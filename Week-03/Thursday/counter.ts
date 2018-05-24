'use strict';
export{};

function factorial(n: number): number {
  if (n === 1) {
    return 1;
  }
  else {
    factorial(n - 1);
    return n * factorial(n - 1);
  }
}

console.log(factorial(11));

// Write a recursive function that takes one parameter: n and counts down from n.