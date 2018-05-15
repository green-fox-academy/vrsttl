'use strict';

function appendA(a: string[]): string[] {
  a.forEach((current, index) => {
    a[index] = `${current}a`;
  });
  return a;
}

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];
let pets: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];


console.log(appendA(far));



export = appendA;

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.