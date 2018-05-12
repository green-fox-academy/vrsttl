'use strict';

let aVar: number = 24;
let out: number = 0;

if (aVar % 2 === 0) {
    out++
}
console.log(out);

let bVar: number = 13;
let out2: string = '';

if (bVar >= 10 && bVar <= 20) {
    out2 = 'Sweet!';
} else if (bVar < 10) {
    out2 = 'Less!';
} else if (bVar > 20) {
    out2 = 'more';
}
console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && !isBonus) {
    c = c -= 2;
} else if (credits < 50 && !isBonus) {
    c = c -= 1;
} else if (isBonus) {
    console.log('afgfhafh');
}
console.log(c);

let d: number = 9;
let time: number = 250;
let out3: string = '';


if(d % 4 === 0 && time <= 200){
  out3 = 'check';
 } else if (/*d % 4 === 0 &&*/ time >= 200){
  out3 = 'time out';   
 } else {
  out3 = 'Run Forest Run!';  
 }
console.log(out3);