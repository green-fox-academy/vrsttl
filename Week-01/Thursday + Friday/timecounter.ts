'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let remainingDaySeconds : number = 0;

let remHours : number = 23 - currentHours;
let remMinutes : number = 59 - currentMinutes;
let remSeconds : number = 59 - currentSeconds;
remainingDaySeconds = (remSeconds + remMinutes * 60 + remHours * 3600) + 1;
console.log(`${remainingDaySeconds} seconds remain of the day.`);

