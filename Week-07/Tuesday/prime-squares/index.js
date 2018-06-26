'use strict';

let section = document.querySelector('section');

for (let i = 2; i < 101; i++) {
  section.innerHTML += `<div>${i}</div>`
}
console.log(section);

let allTheNumbers = document.querySelectorAll('div');

function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

let which = 0;
let primeValidator = (whichOne) => {
  if (isPrime(`${parseInt(allTheNumbers[whichOne].innerHTML)}`)) {
    allTheNumbers[whichOne].classList.add('prime');
  } else {
    allTheNumbers[whichOne].classList.add('not-prime');
  };
  which++;
  if (which >= allTheNumbers.length) {
    clearInterval(blinker);
  }
}
let blinker = setInterval(() => primeValidator(which), 100);

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored