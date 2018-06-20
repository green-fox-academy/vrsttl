'use strict';

body = document.querySelectorAll('p');
/*for (i = 0; i < body.length; i++) {
  body[i].textContent = body[body.length-1].textContent;
}
*/
for (i = 0; i < body.length; i++) {
  body[i].innerHTML = body[body.length-1].innerHTML;
}

/*<!-- You can work in the html or in a separate js file. Like:
<script>
  fill every paragraph with the last one's content.
  fill every paragraph with the last one's content keeping the cat strong.
</script>
OR -->*/