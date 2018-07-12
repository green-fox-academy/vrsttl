'use strict';

let http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/questions', true);
http.onload = () => {

  const response = JSON.parse(http.responseText);
  let idCollection = [];
  console.log(response);
  response.forEach(row => {
    idCollection.push(row[0].id);
  });
}
http.send();