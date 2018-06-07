// [5, 2, 8, -1]
const numbers: number[] = [5, 2, 8, -1, 2, 10];

let newArray: number[] = [];

/*
for (let i: number = 0; i < numbers.length; i++) {
  if (i % 2 === 1) {
    // console.log(numbers[i]);
    newArray.push(numbers[i]);
  }
}
*/

/*
numbers.forEach((element, index) => {
  if (index % 2 === 1) {
    newArray.push(element);
  }
});
*/

// newArray = numbers.filter((element, index) => (index % 2 === 1));
// console.log(newArray);
/*
console.log(Math.min(...numbers));
let minimum: number = numbers[0];
for (let i: number = 1; i < numbers.length; i++) {
  if (numbers[i] < minimum) {
    minimum = numbers[i];
  }
}
console.log(minimum);
*/

numbers.forEach((element) => {
  if (element % 2 === 0) {
    newArray.push(element);
  }
});

console.log(newArray);


let even: number = 0;

/*
for (let i: number = 0; i < newArray.length; i++) {
  even += newArray[i];
}
*/

// even = [].reduce((acc, curr) => acc + curr, 0);
console.log(even);