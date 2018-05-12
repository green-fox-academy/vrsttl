'use strict';

let sideA : number = 60;
let sideB : number = 90;
let surfaceArea : number = 0;
let cubeVolume : number = 0;
surfaceArea = (Math.pow(sideA,2) * 2) + (sideA * sideB) * 4;
cubeVolume = Math.pow(sideA,2) * sideB;
console.log(`Surface area is: ${surfaceArea}, volume is ${cubeVolume}.`);
