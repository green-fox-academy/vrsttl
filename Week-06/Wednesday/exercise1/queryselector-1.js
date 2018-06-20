king = document.querySelector('#b325');
console.log(king);

businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0], businessLamp[1]);

//conceitedKing = document.querySelectorAll('.asteroid');

/*
let workingArray = [];
for (i = 0; i < conceitedKing.length; i++) {
  if (conceitedKing[i].innerText === 'The King' || conceitedKing[i].innerText === 'The Conceited Man') {
    workingArray.push(conceitedKing[i].innerText);
  }
}
*/

let workingArray = [].filter.call(conceitedKing, element => (
  element.innerText === 'The King' || element.innerText === 'The Conceited Man'
)).forEach(element => {
  alert(element.innerText);
});


conceitedKing = document.querySelectorAll('section div');
conceitedKing.forEach(element => {
  console.log(element.innerText);
});

// conceitedKing = workingArray;
alert(conceitedKing[0].innerText);
alert(conceitedKing[1].innerText);

noBusiness = document.querySelectorAll('div');

noBusiness.forEach(element => {
  console.log(element.innerText);
});

/*noBusiness = [].filter.call(conceitedKing, element => (

))*/
/*
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);
*/
/*<!-- You can work in the html or in a separate js file. Like:
<script>
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.-->*/