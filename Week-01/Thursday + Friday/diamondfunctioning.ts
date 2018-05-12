'use strict';
export{};

let lineCount: number = 29;
let charOutput : string = '';
let median : number = 0;
if (lineCount % 2 === 1){
    median = Math.floor(lineCount / 2);
} else {median = lineCount / 2;}
let spaceCount : number = median;
let starCount : number = 1;
let i : number = 0

for (i = 0; i < lineCount - median; i++){
    charOutput = '';
    for ( let j: number = spaceCount; j >= 0; j--){
        charOutput += ' ';
    }
    for (let k: number = 0; k < starCount; k++){
        charOutput += '*';
    }
    spaceCount--;
    starCount += 2;
    console.log(charOutput);
}

if (lineCount % 2 === 0){
    console.log(charOutput);
}   
     
starCount -= 4;
spaceCount += 2;
for (let a : number = 0; a < lineCount - i; a++){
        charOutput = '';
        spaceCount++;
            for (let b: number = 0; b < spaceCount ; b++){
            charOutput += ' ';
        }
        for (let c: number = starCount; c >= 1; c--){
            charOutput += '*';
        }
        starCount -= 2;
        console.log(charOutput);
    

}



// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is