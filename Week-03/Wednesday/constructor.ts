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
}

let jozsi = new Student('Jozsi');
jozsi.name = 'Jozsi';
jozsi.grades.push(5);
let god = new Student('God');
console.log(god.grades);

console.log(jozsi.name);
console.log(jozsi.grades);