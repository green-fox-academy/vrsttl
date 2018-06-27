'use strict';

let http = new XMLHttpRequest();

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
/*
http.open('GET', 'localhost:3000/allbooks', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
}
http.send();*/