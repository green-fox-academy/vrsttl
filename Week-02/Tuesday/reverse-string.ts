'use strict';
export { };
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverse(){
  reversed.split('').reverse().join();
  return reversed;
}

console.log(reverse(reversed));

export = reverse;
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!