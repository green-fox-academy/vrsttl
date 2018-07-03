const button = document.querySelector('button');
const list = document.querySelectorAll('li');
const result = document.querySelector('.result');
button.addEventListener('click', () => {
  result.innerHTML = list.length;
});

/*-- You can work in the html or in a separate js file. Like:
    <script>
      On the click of the button,
      Count the items in the list
      And display the result in the result element.
    </script>
    OR */