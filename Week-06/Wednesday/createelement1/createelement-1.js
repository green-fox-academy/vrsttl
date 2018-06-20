'use strict';

let ul = document.querySelector('.asteroids');
let li = document.createElement("li");
li.appendChild(document.createTextNode("The Green Fox"));
ul.appendChild(li);
li = document.createElement("li");
li.appendChild(document.createTextNode("The Lamplighter"));
ul.appendChild(li);

let h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('I can add elements to the DOM!'));
document.querySelector('.container').appendChild(h1);

img = document.createElement('img');
img.src = 'https://apillarofsociety.files.wordpress.com/2012/06/pbf085ad-lumberjack.jpg?w=720&h=283';
document.querySelector('.container').appendChild(img);

/*<!-- You can work in the html or in a separate js file. Like:
<script>
  Add an item that says 'The Green Fox' to the asteroid list.
  Add an item that says 'The Lamplighter' to the asteroid list.
  Add a heading saying 'I can add elements to the DOM!' to the .container.
  Add an image, any image, to the container.*/