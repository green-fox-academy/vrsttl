'use strict';

console.log('hey');

document.body.style.background = 'red';

const h1 = document.querySelector('h1');

h1.innerHTML = 'More Amazing page';
h1.style.color = 'yellow';

const paragraph = document.createElement('p');
paragraph.innerText = 'Hello, how are you?';

document.body.insertBefore(paragraph, h1);

h1.classList.add('awesome');

h1.onclick = function () {
  h1.style.color = 'aqua';
}