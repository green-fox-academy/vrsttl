'use strict';

const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const victor = document.querySelector('#victor');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const signUp = document.querySelector('#su');
const catFacts = document.querySelector('#cats');
const buttons = document.querySelectorAll('button[type="button"]');

function victorChecker() {
  if (victor.checked && catFacts.disabled) {
    signUp.removeEventListener('click', () => {
      alert('Thank you, you\'ve successfully signed up for cat facts')
    });
    signUp.disabled = false;
    signUp.addEventListener('click', () => {
      alert('Sigh, we still added you to the cat facts list');
    });
  }
}

function enableButton(button) {
  button.disabled = false;
}

function buttonReset() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}

dog.addEventListener('click', () => {
  buttonReset();
  dog.checked = true;
  enableButton(signUp);
  victorChecker();
});

cat.addEventListener('click', () => {
  buttonReset();
  cat.checked = true;
  enableButton(signUp);
  enableButton(catFacts);
  victorChecker();
});

victor.addEventListener('click', () => {
  buttonReset();
  victor.checked = true;
  victorChecker();
});

yes.addEventListener('click', () => {
  buttonReset();
  yes.checked = true;
  enableButton(catFacts);
  victorChecker();
});

no.addEventListener('click', () => {
  no.checked = true;
  catFacts.disabled = true;
  victorChecker();
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  })
});