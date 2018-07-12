'use strict';

let http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/questions', true);
http.onload = () => {
  let response;
  let idCollection = [];
  let allTheRows = document.querySelectorAll('tr');

  let newQuestion = document.querySelector('input[name="new-question"]');
  let newAnswer1 = document.querySelector('input[name="a1"]');
  let newAnswer2 = document.querySelector('input[name="a2"]');
  let newAnswer3 = document.querySelector('input[name="a3"]');
  let newAnswer4 = document.querySelector('input[name="a4"]');
  let correctAnswer1 = document.querySelector('#correct1');
  let correctAnswer2 = document.querySelector('#correct2');
  let correctAnswer3 = document.querySelector('#correct3');
  let correctAnswer4 = document.querySelector('#correct4');
  let correctAnswers = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4];
  let correctValues = [];
  function getTheTicks() {
    correctAnswers.forEach(answer => {
      if (answer.checked !== true) {
        correctValues.push(0);
      } else {
        correctValues.push(1);
      }
    });
  }
  console.log(correctValues);
  let submitButton = document.querySelector('.final-submit');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    getTheTicks();
    console.log(correctValues);
    const newDataSend = new XMLHttpRequest();
    newDataSend.open('POST', 'http://localhost:3000/questions', true);
    newDataSend.setRequestHeader('Content-Type', 'application/json');
    newDataSend.send(JSON.stringify({
      question: newQuestion.value,
      answer1: newAnswer1.value,
      answer2: newAnswer2.value,
      answer3: newAnswer3.value,
      answer4: newAnswer4.value,
      is_correct1: correctValues[0],
      is_correct2: correctValues[1],
      is_correct3: correctValues[2],
      is_correct4: correctValues[3]
    }))
  });

  const dataGetter = new XMLHttpRequest();
  dataGetter.open('GET', 'http://localhost:3000/api/questions', true);
  dataGetter.onload = () => {
    response = JSON.parse(dataGetter.responseText);
    response.forEach(row => {
      idCollection.push(row.id);
    });
  }
  dataGetter.send();
  allTheRows.forEach((row, index) => {
    row.addEventListener('click', (e) => {
      if (e.target.type === 'submit') {
        e.preventDefault();
        const deleteConn = new XMLHttpRequest();
        deleteConn.open('DELETE', `http://localhost:3000/questions/${idCollection[index]}`, true);
        deleteConn.send();
      }
    });
  });

}
http.send();