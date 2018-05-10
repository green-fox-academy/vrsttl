let var1: number = 3;
var1 += 10;
console.log(var1);

let var2: number = 100;
var2 -=7
console.log(var2);

let var3: number = 44;
var3 = Math.pow(var3,2);
console.log(var3);

let var4: number = 125;
var4 = var4/5;
console.log(var4);

let var5: number = 8;
var5 = Math.pow(var5,3);
console.log(var5);

let f1: number = 123;
let f2: number = 345;
let f1Bigger : boolean = undefined;
if (f1 > f2){
    f1Bigger = true;
} else {
    f1Bigger = false; 
}
console.log(f1+" being bigger than " +f2+" ? That is a " + f1Bigger + " statement." )


let g1: number = 350;
let g2: number = 200;
let g2Bigger : boolean = undefined;
let g2Status : string = "";
if(Math.pow(g2,2)>g1){
    g2Bigger = true;
    g2Status = " is larger than"
    }   else {
        g2Bigger = false;
        g2Status = " is smaller than"
    }
console.log(g2 + " multiplied by two" + g2Status + " " +  g1 + ".");


let h : number = 1357988018575474;
let elevenThisTime : number = 11;
let elevenIsDivisor : boolean = undefined;
let dividend : number = undefined;
dividend = h % elevenThisTime;
if(dividend !=0){
    elevenIsDivisor = false;
    console.log(h + " is not divisible by " + elevenThisTime + ". The statement is "+ elevenIsDivisor + ".");
} else{
    elevenIsDivisor = true;
    console.log(h + " is divisible by " + elevenThisTime + ". The statement is "+ elevenIsDivisor + ".");
}


let i1 : number = 10;
let i2 : number = 3;
let compVar : string = "";
let countResult1 : boolean = undefined;

if( i1>Math.pow(i2,2) && i1<Math.pow(i2,3)){
    countResult1 = true;
    compVar = " is";
} else {
    countResult1 = false;
    compVar = " is not";
}

console.log("The number " + i1 + compVar + " larger than " + i2 + " squared and smaller than " + i2 + " cubed." )

let j : number = 1521;
let isItDivisible : boolean = undefined;
if (j % 3 === 0 || j % 5 === 0){
    isItDivisible = true;
}
console.log(j + " is divisible by either 3 or 5. Which one, don't ask. I'm too lazy to write the previous variables again.");

let k : string = 'Apple';
let iFourTimes : number = 0;
for (iFourTimes = 0; iFourTimes <=4; iFourTimes++){
    k= k + k;
}
console.log(k);