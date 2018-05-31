'use strict';

export function anagram(wordOne: string, wordTwo: string) {
  let isIt: boolean = false;
  let wordOneArray: string = wordOne.toLowerCase().split('').sort().join('').trim();
  let wordTwoArray: string = wordTwo.toLowerCase().split('').sort().join('').trim();
  if (wordOneArray === wordTwoArray) {
    isIt = true;
  }
  return isIt;
}
console.log(anagram('almh', 'amlah'));
