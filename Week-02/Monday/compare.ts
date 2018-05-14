'use strict';
export { };

let firstList = [1, 2, 3];
let secondList = [4, 5];
let charOutput : string = '';

if (firstList.length > secondList.length) {
  charOutput = 'The first array contains more elements.';
} else {
  charOutput = 'The second array contains more elements.'
}
console.log(charOutput);

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`