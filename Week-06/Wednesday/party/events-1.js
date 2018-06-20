'use strict';

document.querySelector('button').onclick = function () {
  if (!(document.querySelector('body').classList.contains('party'))) {
    document.querySelector('body').classList.add('party')
  } else {
    document.querySelector('body').classList.remove('party');
  }
};
/*
button.onclick = function () {
  if (!(document.querySelector('button').classList.contains('party'))) {
    document.querySelector('body').classList.add('party')
  } else {
    document.querySelector('body').classList.remove('party');
  }
};
*/
/*<!-- You can work in the html or in a separate js file. Like:
<script>
  Turn the party on and off by clicking the button. (the whole page)
</script>
OR*/