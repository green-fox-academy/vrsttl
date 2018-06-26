'use strict';

let http = new XMLHttpRequest();

http.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon+landing&api-key=9a6fa9c819ff422598b1d1c6a7207760', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  console.log(response);
  response.response.docs.forEach(element => {
    let div = document.querySelector('div');
    let ul = document.createElement('ul');
    div.appendChild(ul);
    const li1 = document.createElement('li');
    const a1 = document.createElement('a');
    a1.innerHTML = element.headline.main;
    a1.setAttribute('href', element.web_url);
    li1.appendChild(a1);
    ul.appendChild(li1);
    const li2 = document.createElement('li');
    li2.innerHTML = element.snippet;
    ul.appendChild(li2);
    const li3 = document.createElement('li');
    li3.innerHTML = element.pub_date;
    ul.appendChild(li3);
  });
}
http.send();