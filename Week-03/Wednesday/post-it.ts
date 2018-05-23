'use strict';
export { };
class PostIt {
  backgroundColor: string;
  textColor: string;
  text: string;
  constructor(text: string, textColor: string, backgroundColor: string) {
    this.text = text;
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
    }
  }

let postIt1: Object = new PostIt('Idea 1','blue','orange');
console.log(postIt1);
let postIt2: Object = new PostIt('Awesome','black','pink');
console.log(postIt2);
let postIt3: Object = new PostIt('Superb!','green','yellow');
console.log(postIt3);