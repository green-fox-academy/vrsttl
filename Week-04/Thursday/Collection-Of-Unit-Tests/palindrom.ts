'use strict';

function anagram(wordOne: string, wordTwo: string) {
  let isIt: boolean;
  let isItCounter: number = 0;
  for (let i: number = 0; i < wordOne.length; i++) {
    if (wordOne.substring[i] === wordTwo.substring[wordTwo.length - i]) {
      isItCounter++;
    }
  }
  if (isItCounter === wordOne.length) {
    isIt = true;
    return isIt;
  }
}
console.log(anagram('aagagg', 'aaa'));