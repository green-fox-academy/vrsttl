'use strict';
export {};

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let insert : string = ' always takes longer than ';
let spliceBegin : number = quote.indexOf(' y');
let spliceEnd: number = quote.indexOf('you');
quote = quote.substring(0,spliceBegin) + insert + quote.substring(spliceEnd);
console.log(quote);


// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"