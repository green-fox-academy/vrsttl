'use strict';

let http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/posts', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const table = document.querySelector('table');
  console.log(response);
  response.posts.forEach((element, index) => {
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    let titleCell = document.createElement('td');
    let sqlId = document.createElement('div');
    sqlId.innerText = element.id;
    sqlId.classList.add('sqlidnumber');
    table.appendChild(sqlId);
    console.log(sqlId);
    titleCell.innerHTML = element.title;
    tableRow.appendChild(titleCell);
    let urlCell = document.createElement('td');
    urlCell.innerHTML = element.URL;
    tableRow.appendChild(urlCell);
    let ownerCell = document.createElement('td');
    ownerCell.innerHTML = element.owner;
    tableRow.appendChild(ownerCell);
    let scoreCell = document.createElement('td');
    scoreCell.innerHTML = element.score;
    scoreCell.classList.add(`scorecard-sc${index}`);
    tableRow.appendChild(scoreCell);
    let upVoteCell = document.createElement('td');
    let upVoteButton = document.createElement('button');
    upVoteButton.classList.add('up');
    upVoteButton.innerText = '+1';
    upVoteCell.appendChild(upVoteButton);
    tableRow.appendChild(upVoteCell);
    let downVoteCell = document.createElement('td');
    let downVoteButton = document.createElement('button');
    downVoteButton.classList.add('down');
    downVoteButton.innerText = '-1';
    upVoteCell.appendChild(downVoteButton);
    tableRow.appendChild(downVoteCell);
  });

  let upButtons = document.querySelectorAll('.up');
  let downButtons = document.querySelectorAll('.down');
  let sqlIds = document.querySelectorAll('.sqlidnumber');
  
  upButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
      let updateConn = new XMLHttpRequest();
      updateConn.open('PUT', `http://localhost:3000/posts/${sqlIds[index].innerText}/upvote`, true);
      updateConn.setRequestHeader('Content-Type', 'application/json');
      updateConn.send(JSON.stringify({
        vote: 1
      }));
      let scoreInner = document.querySelector(`.scorecard-sc${index}`);
      scoreInner.innerText = parseInt(scoreInner.innerText) + 1;
    });
  });
  
  downButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
      let updateConn = new XMLHttpRequest();
      updateConn.open('PUT', `http://localhost:3000/posts/${sqlIds[index].innerText}/downvote`, true);
      updateConn.setRequestHeader('Content-Type', 'application/json');
      updateConn.send(JSON.stringify({
        vote: -1
      }));
      let scoreInner = document.querySelector(`.scorecard-sc${index}`);
      scoreInner.innerText = parseInt(scoreInner.innerText) - 1;
    });
  });
}
http.send();