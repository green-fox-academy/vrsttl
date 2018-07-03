'use strict';

const nav = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
console.log(img.style);
nav.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-direction') === 'up') {
    img.style.backgroundPosition = '0 10px';
  } else if (e.target.getAttribute('data-direction') === 'down') {
    img.style.backgroundPosition = "0 -10px";
  } else if (e.target.getAttribute('data-direction') === 'left') {
    img.style.backgroundPosition = "10px 0";
  } else if (e.target.getAttribute('data-direction') === 'right') {
    img.style.backgroundPosition = "-10px 0";
  }
})

nav.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-direction') === 'in') {
    img.style.backgroundSize = '240%';
  } else if (e.target.getAttribute('data-direction') === 'out') {
    img.style.backgroundSize = "160%";
  }
})
/*You can work in the html or in a separate js file. Like:
<script>
  Here is an image inspector, but the buttons are not implemented yet, that will
  be your task!
   - the nav buttons (up, down, left, right) move the background by 10px
   - the zoom buttons increase/decrease the image by 20%
   - attach only two event listeners to the nav element
     - one for navigation
     - one for zooming
</script>
OR*/