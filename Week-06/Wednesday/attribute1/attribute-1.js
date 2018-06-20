'use strict';

console.log(document.querySelector('img').getAttribute('src'));

document.querySelector("img").setAttribute("src", "http://allatbaratok.net/wp-content/uploads/2016/08/Ez%C3%A9rt-im%C3%A1djuk-a-golden-eetriever-kuty%C3%A1kat.-Ez-a-vide%C3%B3-garant%C3%A1ltan-mosolyt-csal-az-arcodra2-2.png");

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com');
document.querySelector('.this-one').disabled = true;
document.querySelector('.this-one').innerText = 'Don\'t click me!';




/*<!-- You can work in the html or in a separate js file. Like:
<script>
  Write the image's url to the console.
  Replace the image with a picture of your favorite animal.
  Make the link point to the Green Fox Academy website.
  Disable the second button.
  Replace its text with 'Don't click me!'.
</script>
OR
<> -->*/