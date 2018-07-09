'use strict';

const shuffler = {
  cash: 10000,
  pick: function () {
    let pickedHaven = Math.floor((Math.random() * 2));
    this.cash -= 1000;
    taxHavens[pickedHaven].deposit(1000);
    console.log(`${taxHavens[pickedHaven].name} got 1000`);
  }
};

let taxHavens = [];
let panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function (amt) {
    this.cash += amt;
  }
};

let cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function (amt) {
    this.cash += amt;
  }
};

taxHavens.push(panama);
taxHavens.push(cyprus);

shuffler.pick();
shuffler.pick(); 
shuffler.pick(); 
shuffler.pick();
console.log(panama.cash);
console.log(cyprus.cash);