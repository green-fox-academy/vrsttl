listItems = document.querySelectorAll('li');
fillerItems = ['apple', 'banana', 'cat', 'dog'];
console.log(listItems);

for (i = 0; i < listItems.length; i++) {
  listItems[i].innerText = fillerItems[i];
}

console.log(listItems);





/*
    <!-- You can work in the html or in a separate js file. Like:
    <script>
      1) replace the list items' content with items from this list:
      ['apple', 'banana', 'cat', 'dog']
      2) change the <ul> element's background color to 'limegreen'
        - use css class to change the color instead of the style property
    </script>
    OR
    <script src="content-2.js"></script> -->
    */