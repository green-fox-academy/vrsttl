'use strict';

let students: any[] = [
  { name: 'Rezso', age: 9.5, candies: 2 },
  { name: 'Zsombor', age: 12, candies: 5 },
  { name: 'Aurel', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'Gerzson', age: 10, candies: 1 },
];

function candyBarons(student: any[]) {
  Object.keys(student).forEach(index => {
    if (student[index].candies > 4) {
      console.log(`${student[index].name} has ${student[index].candies} candies.`)
    }
  });
}
candyBarons(students);

function candyAverage(student: any[]) {
  let sumOfCandies: number = 0;
  Object.keys(student).forEach(index => {
    sumOfCandies += student[index].candies;    
  });
  let avgCandies = sumOfCandies / students.length;
  return avgCandies;
}
console.log(`Average number of candies: ${candyAverage(students)}.`);



// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average