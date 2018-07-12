'use strict';

let http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/questions', true);
http.onload = () => {
  let response;
  let idCollection=[];
  let allTheRows = document.querySelectorAll('tr');
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