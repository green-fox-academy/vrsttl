'use strict';

let fibonacciArray: number[] = [0, 1];
let i: number = 1;

export function fibonacci(n: any): any {
  if (n === 1) {
    return fibonacciArray[i];
  }
  else if (typeof n !== 'number') {
    return 'n is not a number.';
  } else if (n === 0) {
    return 'There is no 0. element in a Fibonacci array.';
  } else {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i])
    i++
    return fibonacci(n - 1);
  }
}