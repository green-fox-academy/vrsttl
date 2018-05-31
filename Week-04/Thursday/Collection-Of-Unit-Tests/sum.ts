'use strict';

export class Integers {
  numbers: any[] = [];
  constructor(numbers: any[]) {
    this.numbers = numbers;
  }
  add(numbers) {
    let sumOfArrayElements: number = 0;
    for (let i: number = 0; i < this.numbers.length; i++) {
      if (typeof this.numbers[i] === 'string') {
        return 'This is a string.';
      }
      else if (this.numbers.length === 1) {
        sumOfArrayElements = this.numbers[0];
      }
      else {
        sumOfArrayElements += this.numbers[i];
      }
    }
    return sumOfArrayElements;
  }
}


