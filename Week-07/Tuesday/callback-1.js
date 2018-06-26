'use strict';
/*
/*
/*const mapwith = (array, callback) => {
  let output = [];
  for (let i = 0; i<array.length; i++){
    output.push(callback(array[i]));    
  }
  return output
}*/
// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.
/*const addOne = (number) => {
  return number + 1;
}
*/
// Exercise 1:

//console.log(mapwith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which remove every second letter from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let output = [];
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      output.push(word[i]);
      console.log(word[i]);
    }
  }
  return output.join('');
}

const mapwith = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}


console.log(mapwith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']