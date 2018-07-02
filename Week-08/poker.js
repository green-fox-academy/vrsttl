'use strict';


const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const colors = ['H', 'S', 'C', 'D'];

const blackHand = [[2, 'H'], [2, 'D'], [5, 'S'], [9, 'C'], ['K', 'D']];

const whiteHand = [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], ['A', 'H']];


module.exports = function whoIsTheWinner(blackHand, whiteHand) {
  let blackCardIndex = 0;
  let whiteCardIndex = 0;
  blackHand.forEach(element => {
    cards.forEach((card, index) => {
      if (element[0] === card && blackCardIndex < index) {
        blackCardIndex = index;
        console.log(card, blackCardIndex);
      }
    });
  });
  whiteHand.forEach(element => {
    cards.forEach((card, index) => {
      if (element[0] === card && whiteCardIndex < index) {
        whiteCardIndex = index;
      }
    });
  });
  let winnerStatus = '';
  if (blackCardIndex > whiteCardIndex) {
    winnerStatus = 'Black wins';
  } else if (whiteCardIndex > blackCardIndex) {
    winnerStatus = 'White wins';
  } else {
    winnerStatus = 'It\'s a draw';
  }
  return winnerStatus;
}

module.exports = function isItAPair(blackHand) {
  let result = {};
  let blackCardValues = [];
  blackHand.forEach(element => {
    blackCardValues.push(element[0]);
  });
  if (blackCardValues instanceof Array) {
    blackCardValues.forEach(function (v, i) {
      if (!result[v]) {
        result[v] = 1;
      } else {
        result[v]++;
      }
    });
  }

  const valueArray = Object.keys(result).filter(key => result[key] === 2);
  if (valueArray.length !== 0) {
    return true;
  } else {
    return false;
  }
}

