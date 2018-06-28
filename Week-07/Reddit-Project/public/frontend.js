'use strict';

let http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/posts', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const div = document.querySelector('div');
  console.log(response);
  response.posts.forEach(element => {
    let post = document.createElement('p');
    post.innerHTML = element.title;
    div.appendChild(post);
  });
}
http.send();