'use strict';

const button = document.querySelector('button');
const text = document.querySelector('p');
text.style.visibility = 'hidden';
let haveYouBeenPatient = false;
let countClicks = 0;
let clickFired = false;

window.onload=setTimeout(() => {
  if (!clickFired) {
    haveYouBeenPatient = true;
  }
}, 5000);

button.addEventListener('click', () => {
  countClicks++;
  clickFired = true;
  if (haveYouBeenPatient && countClicks >= 3) {
    text.style.visibility = 'initial';
  }
});

/*
Create a simple HTML document with one button.
If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, 
a text should appear under the button:
5 seconds elapsed and clicked 3 times
If the user starts clicking before the first 5 seconds, nothing should be printed*/