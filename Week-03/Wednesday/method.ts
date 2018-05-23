'use strict';
export { };

class Student {
  name: string = 'asdf';
  grades: number[] = [];

  constructor(name: string) {
    this.name = name;
    if (name === 'God') {
      this.grades = [5, 5, 5];
    }
    else {
      this.grades = [];
    }
    this.grades = [];
  }
  addGrade(grade: number): void {
    this.grades.push(grade);
  }
  getAverage(): number {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
}

let jozsi = new Student('Jozsi');
jozsi.name = 'Jozsi';
//jozsi.grades.push(5);
jozsi.addGrade(5);
jozsi.addGrade(2);
jozsi.addGrade(1);
//let god = new Student('God');
//console.log(god.grades);

console.log(jozsi.name);
console.log(jozsi.grades);
console.log(jozsi.getAverage());