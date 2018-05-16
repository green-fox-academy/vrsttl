'use strict';
export { };

function divider(number) {
  let result: number = 10 / number;
  if (number === 0) {
    throw new Error(`You can't divide by zero, you dumbass!`);
  }
  return result;
}
try {
  console.log(divider(2));
}
catch (error) {
  console.log(error);
}




// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0