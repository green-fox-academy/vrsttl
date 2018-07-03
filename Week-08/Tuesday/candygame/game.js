'use strict';

const create = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
const machine = document.querySelector('.candy-machine');

let stats = document.querySelector('.stats');
let candies = document.querySelector('.candies');
let lollipops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let genSpeed = 1000;

create.addEventListener('click', () => {
  candies.innerHTML++;
});

buy.addEventListener('click', () => {
  if (candies.innerHTML >= 100) {
    candies.innerHTML -= 100;
    lollipops.innerHTML += '🍭';
  }
})

if (lollipops.innerText.indexOf('🍭🍭🍭🍭🍭🍭🍭🍭🍭🍭') !== -1) {
  speed.innerHTML++;
  setInterval(() => {
    candies.innerHTML++;
  }, genSpeed);
}

machine.addEventListener('click', () => {
  speed.innerText *= 10;
  genSpeed /= 10;
  setInterval(() => {
    candies.innerHTML++;
  }, Math.floor(genSpeed))
})

/*Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the 🍭 emoji to display the lollipops you have
Display the candy producton rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x*/