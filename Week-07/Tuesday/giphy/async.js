'use strict';

let http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=R9dTw1TqxZH1WtM9Wh5VPzegCoSmXzAg&q=kitten&limit=16&offset=0&rating=G&lang=en', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  let divArray = document.querySelector('div');
  response.data.forEach(element => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src = element.images.fixed_width_still.url;
    image.addEventListener('click', () => {
      image.setAttribute('src', element.images.fixed_height.url);
    });
    divArray.appendChild(image);
  });
}
http.send();




