'use strict';
export { };
let students: any[] = [
  { name: 'Teodor', age: 3, candies: 2 },
  { name: 'Rezso', age: 9.5, candies: 2 },
  { name: 'Zsombor', age: 12, candies: 5 },
  { name: 'Aurel', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'Gerzson', age: 10, candies: 1 },
];

function candiesOwned(student: any[]) {
  let sumOfCandies: number = 0;
  Object.keys(student).forEach(index => {
    sumOfCandies += student[index].candies;
  });
  console.log(`Students own a total of ${sumOfCandies} candies.`);
}
candiesOwned(students);

function candyPoorAge(student: any[]) {
  let sumOfAge: number = 0;
  Object.keys(student).forEach(index => {
    if (student[index].candies < 5) {
      sumOfAge += student[index].age;
    }
  });
  console.log(`The grand total age of the candy-poor in the class is ${sumOfAge}.`);
}
candyPoorAge(students);

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies