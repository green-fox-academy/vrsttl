'use strict';
export { };

let matrixSize: number = 4;
let matrixArray: any[] = [];

for (let i: number = 0; i < matrixSize; i++) {
  matrixArray[i] = [];
  for (let j: number = 0; j < matrixSize; j++) {
    if (i + j + 1 === matrixSize){
      matrixArray[i].push(1);
    }
    else { matrixArray[i].push(0);}
  }
}
console.log(matrixArray);


// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array