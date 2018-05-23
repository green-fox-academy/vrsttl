'use strict';
export { };

class Teachers {

  teacherName: string;
  teacherTopic: string;

  constructor(name: string, topic?: string) {
    this.teacherName = name;
    this.teacherTopic = topic;
  }

  answer() {
    console.log('That is the answer.');
  }

  teach(student) {
    student.learn();
  }

}
class Students {
  studentName: string;
  studentLoan: number;

  constructor(name: string, loan?: number) {
    this.studentName = name;
    this.studentLoan = loan;
  }

  question(teacher) {
    teacher.answer();
  }

  learn() {
    console.log('Better fucking listen to this...');
  }
}

let balazskaikszde: Teachers = new Teachers('balazskaikszde', 'typescript');
let benci: Teachers = new Teachers('benci', 'styleguide_tormentor');
let atti: Students = new Students('atti', 20000);
console.log(balazskaikszde);
console.log(benci);
console.log(atti);
balazskaikszde.teach(atti);
atti.question(benci);

/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/