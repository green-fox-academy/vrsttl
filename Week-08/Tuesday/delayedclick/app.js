'use strict';

const button = document.querySelector('button');
const text = document.querySelector('.text');

text.style.display = 'none';

button.addEventListener('click', () => {
  setTimeout(() => {
    text.style.display = 'initial';
  }, 2000);
});