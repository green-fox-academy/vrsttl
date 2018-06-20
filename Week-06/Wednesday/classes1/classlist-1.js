'use strict';

pArray = document.querySelectorAll('p');
console.log(pArray);
if (pArray[3].classList.contains('dolphin')) {
  document.querySelector('.apple').innerHTML = 'pear';
}

if (pArray[0].classList.contains('apple')) {
  document.querySelector('.cat').innerHTML = 'dog';
}

document.querySelector('.apple').classList.add('red');
document.querySelector('.balloon').classList.remove('balloon');
console.log(pArray, 'p');


/*
<!-- You can work in the html or in a separate js file. Like:
<script>
  If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
  If the first p has an 'apple' class, replace cat's content with 'dog'
  Make apple red by adding a .red class
  Make balloon less balloon-like
</script>
OR
*/