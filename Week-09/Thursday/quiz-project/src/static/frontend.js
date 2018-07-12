'use strict';

function callNewQuestion() {
  let newLoad = new XMLHttpRequest();
  newLoad.open('GET', 'http://localhost:3000/game', true);
  window.location.href = 'http://localhost:3000/game';
  newLoad.send();
}

let scoreCard = document.querySelector('.score');

let scoreCounter = 0;

let http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/game', true);
http.onload = () => {
  scoreCounter = localStorage.getItem('score');
  let ans1 = document.querySelector('.one');
  let ans2 = document.querySelector('.two');
  let ans3 = document.querySelector('.three');
  let ans4 = document.querySelector('.four');

  let isCorr1 = document.querySelector('.iscorrect-one');
  let isCorr2 = document.querySelector('.iscorrect-two');
  let isCorr3 = document.querySelector('.iscorrect-three');
  let isCorr4 = document.querySelector('.iscorrect-four');
  console.log(isCorr1);
  console.log(isCorr2);
  console.log(isCorr3);
  console.log(isCorr4);

  ans1.addEventListener('click', () => {
    if (isCorr1.innerHTML == 1) {
      ans1.classList.add('winner');
      scoreCounter++;
      localStorage.setItem('score', scoreCounter);
      scoreCard.innerHTML = `Score: ${scoreCounter}`;
      setTimeout(callNewQuestion, 3000);
    } else {
      ans1.classList.add('loser');
      setTimeout(callNewQuestion, 3000);
    }
  });
  ans2.addEventListener('click', () => {
    if (isCorr2.innerHTML == 1) {
      ans2.classList.add('winner');
      scoreCounter++;
      localStorage.setItem('score', scoreCounter);
      scoreCard.innerHTML = `Score: ${scoreCounter}`;
      setTimeout(callNewQuestion, 3000);
    } else {
      ans2.classList.add('loser');
      setTimeout(callNewQuestion, 3000);
    }
  });
  ans3.addEventListener('click', () => {
    if (isCorr3.innerHTML == 1) {
      ans3.classList.add('winner');
      scoreCounter++;
      localStorage.setItem('score', scoreCounter);
      scoreCard.innerHTML = `Score: ${scoreCounter}`;
      setTimeout(callNewQuestion, 3000);
    } else {
      ans3.classList.add('loser');
      setTimeout(callNewQuestion, 3000);
    }
  });
  ans4.addEventListener('click', () => {
    if (isCorr4.innerHTML == 1) {
      ans4.classList.add('winner');
      scoreCounter++;
      localStorage.setItem('score', scoreCounter);
      scoreCard.innerHTML = `Score: ${scoreCounter}`;
      setTimeout(callNewQuestion, 3000);
    } else {
      ans4.classList.add('loser');
      setTimeout(callNewQuestion, 3000);
    }
  });
}
http.send();
