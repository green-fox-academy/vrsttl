'use strict';
const whoIsTheWinner = require('../poker');
const isItAPair = require('../poker');

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const colors = ['H', 'S', 'C', 'D'];

const blackHand = [[2, 'H'], [2, 'D'], [5, 'S'], [9, 'C'], ['K', 'D']];

const whiteHand = [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], ['A', 'H']];

const test = require('tape');

test('Ace high', (t) => {
  t.equal(whoIsTheWinner(blackHand, whiteHand, 'White wins', 'White wins'));
  t.equal(isItAPair(blackHand), true);
  t.end();
});

