'use strict';
export{};

let lineCount : number = 4;
let starS : string = '*';
let star : string = '*';

for (let i : number = 1; i <=lineCount; i++) {
    console.log(starS);
    starS = starS + star;
}
