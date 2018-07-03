'use strict';

const button = document.querySelector('button');

/*button.addEventListener('click', () => {
  if (!button.clicked) {
    console.log(Math.floor(Date.now() / 1000));
    button.clicked = true;
  }
});*/

button.addEventListener('click', () => {
  if (!button.disabled) {
    console.log(Math.floor(Date.now() / 1000));
    button.disabled = true;
  }
});




/*    <!-- You can work in the html or in a separate js file. Like:
    <script>
      Create an event listener which logs the current timestamp to the console once the button is clicked.
      When the button is clicked for the second or any other times no event listener should be called.
      Try to solve this two different ways.
      hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    </script>
    OR*/