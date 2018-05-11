'use strict';
export{};

let lineCount : number = 4;
let charOutput : string = '';
let spaceCount : number = 3;
let starCount : number = 1;

for (let i : number = 0; i < lineCount; i++){
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
