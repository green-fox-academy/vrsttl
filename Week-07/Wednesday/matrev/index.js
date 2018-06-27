'use strict';

let http = new XMLHttpRequest();
/*
http.open('GET', 'http://localhost:3000/books', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
  let baseDiv = document.querySelector('div');
  for (let i = 0; i < response.books.length; i++){
    let nameContent = document.createElement('p');
    nameContent.innerText = response.books[i].book_name;
    console.log(nameContent);
    baseDiv.appendChild(nameContent);
  }
}
http.send();
*/

http.open('GET', 'localhost:3000/allbooks', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
}

http.open('GET', 'http://localhost:3000/allbooks', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
  let baseTable = document.querySelector('table');
  for (let i = 0; i < response.books.length; i++) {
    let oneRow = document.createElement('tr');
    baseTable.appendChild(oneRow);
    let block1 = document.createElement('td');
    oneRow.appendChild(block1);
    block1.innerText = response.books[i].book_name;
    let block2 = document.createElement('td');
    oneRow.appendChild(block2);
    block2.innerText = response.books[i].cate_descrip;
    let block3 = document.createElement('td');
    oneRow.appendChild(block3);
    block3.innerText = response.books[i].aut_name;
    let block4 = document.createElement('td');
    oneRow.appendChild(block4);
    block4.innerText = response.books[i].pub_name;
    let block5 = document.createElement('td');
    oneRow.appendChild(block5);
    block5.innerText = response.books[i].book_price;
  }
}

http.send();
