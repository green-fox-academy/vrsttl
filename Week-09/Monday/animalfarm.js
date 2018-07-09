'use strict';

function Animal() {
  this.hunger = 5;
  this.thirst = 5;
  this.eat = function () {
    this.hunger--;
  };
  this.drink = function () {
    this.thirst--;
  }
  this.play = function () {
    this.hunger++;
    this.thirst++;
  }
};

function Farm(slots) {
  this.animals = [];
  this.breed = function () {
    if (this.animals.length < slots) {
      let newAnimal = new Animal();
      this.animals.push(newAnimal);
    }
  }
  this.slaughter = function () {
    let hungerNumbers = [];
    this.animals.forEach(animal => {
      hungerNumbers.push(animal.hunger);
    });
    const min = hungerNumbers.indexOf(Math.min(...hungerNumbers));
    this.animals.splice(this.animals[min], 1);
  }
  this.printReport = function () {
    if (this.animals.length > 0) {
      console.log(`We have ${this.animals.length} animals left`)
    } else { console.log('We are bankrupt.') };
    if (this.animals.length < slots) {
      console.log(`We have ${this.animals.length} animals out of ${slots} places. We're okay.`);
    } else { console.log('We\'re at full capacity...'); };
  };
  this.progress = function () {
    let randomCallerEat = function (animal) {
      let randomNumber = Math.floor((Math.random() * 2));
      let randomEat = Math.floor((Math.random() * 2));
      if (randomNumber === randomEat) {
        animal.eat();
      }
    }
    let randomCallerDrink = function (animal) {
      let randomNumber = Math.floor((Math.random() * 2));
      let randomDrink = Math.floor((Math.random() * 2));
      if (randomNumber === randomDrink) {
        animal.drink();
      }
    }
    let randomCallerPlay = function (animal) {
      let randomNumber = Math.floor((Math.random() * 2));
      let randomPlay = Math.floor((Math.random() * 2));
      if (randomNumber === randomPlay) {
        animal.play();
      }
    }
    this.animals.forEach(element => {
      randomCallerPlay(element);
      randomCallerEat(element);
      randomCallerDrink(element);
    });
    this.slaughter();
    this.breed();
    this.printReport();
  };
};

let farm = new Farm(20);
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
console.log(farm.animals);
farm.progress();
farm.progress();
farm.progress();
farm.progress();
console.log(farm.animals);