'use strict';

const clog = (word) => {
  console.log(word);
}
let fruitArray = ['apple', 'pear', 'melon', 'grapes'];
fruitArray.forEach((element, index) => {
  let timeout = 0;
  if (index === 0) {
    timeout = 0;
  } else if (index === 1) {
    timeout = 1000;
  } else if (index === 2) {
    timeout = 3000;
  } else {
    timeout = 5000;
  }
  setTimeout(() => clog(`${element}`), timeout);
});
