'use strict';

class Person {
  name: string = '';
  age: number = 0;
  gender: string = '';

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'Female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!')
  }
}

class Student extends Person {
  previousOrganization: string = '';
  skippedDays: number = 0;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'Female', previousOrganization: string = 'The School of Life') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  getGoal() {
    console.log('Be a junior software developer');
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
}

class Mentor extends Person {
  level: string = '';
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'Female', level: string = 'Intermediate') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

class Sponsor extends Person {
  company: string = '';
  hiredStudents: number = 0;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'Female', company: string = 'ACME Ltd.') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }
  hire() {
    this.hiredStudents++;
  }
  getGoal() {
    console.log('Hire brilliant junior software developers.');
  }
}

class Cohort {
  name: string = '';
  students: Student[];
  mentors: Mentor[];
  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }
  addStudent(studentName) {
    this.students.push(studentName);
  }
  addMentor(mentorName) {
    this.mentors.push(mentorName);
  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}
let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

for (let i = 0; i < 3; i++) {
  elon.hire();
}

for (let i = 0; i < 5; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();