'use strict';

class Student {
  name: string = 'asdfadsga';
  grades: number[]=[];
  
}

let jozsi = new Student();
jozsi.name='Jozsi';
jozsi.grades.push(5);

console.log(jozsi.name);
console.log(jozsi.grades);