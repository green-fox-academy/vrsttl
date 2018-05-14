'use strict';
export { };

let numList = [3, 4, 5, 6, 7];
let reversed = numList.reverse();
console.log(reversed);

let tempList = [];
for (let i = 0; i < numList.length; i++) {
  tempList.unshift(numList[i]);
}
console.log(tempList);
numList = tempList.map(change => change);
console.log(numList);


// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
