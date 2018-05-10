let dailyHours: number = 6;
let semesterLength: number = 17;
let weeklyWorkdays: number = 5;
let weeklyworkhours: number = 52;

let semesterCodingHours: number = semesterLength * weeklyWorkdays * dailyHours;
let totalCourseHours: number = semesterLength * weeklyworkhours;
let percentageOfCodingHours: number = (semesterCodingHours / totalCourseHours) * 100;

console.log(semesterCodingHours);
console.log(percentageOfCodingHours + " %")