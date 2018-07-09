'use strict';
window.onload = () => {
  let upButton = document.querySelector('.up');
  let downButton = document.querySelector('.down');
  let addPeople = document.querySelector('.more-people');
  let takePeople = document.querySelector('.less-people');
  let floorOne = document.querySelector('.one');
  let floorTwo = document.querySelector('.two');
  let floorThree = document.querySelector('.three');
  let floorFour = document.querySelector('.four');
  let floorFive = document.querySelector('.five');
  let floorSix = document.querySelector('.six');
  let floorSeven = document.querySelector('.seven');
  let floorEight = document.querySelector('.eight');
  let floorNine = document.querySelector('.nine');
  let floorTen = document.querySelector('.ten');
  let model = new ElevatorModel(10, 10);
  let floors = [floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix, floorSeven, floorEight, floorNine, floorTen];
  let currentFloor = floors[0];

  function ElevatorModel(floor, people) {
    this.position = 0;
    this.direction = 'up';
    this.peopleInside = 0;
    this.add = function () {
      if (this.peopleInside < people) {
        this.peopleInside++;
        currentFloor.innerText = this.peopleInside;
      }
    };
    this.take = function () {
      if (this.peopleInside > 0) {
        this.peopleInside--;
        currentFloor.innerText = this.peopleInside;
      }
    };
    this.up = function () {
      this.direction = 'up';
      if (this.position < floor - 1) {
        this.position++;
        currentFloor = floors[this.position];
        currentFloor.innerText = this.peopleInside;
        floors[this.position - 1].innerText = "";
        console.log(this.position);
      }
    }
    this.down = function () {
      this.direction = 'down';
      if (this.position > 0) {
        this.position--;
        currentFloor = floors[this.position];
        currentFloor.innerText = this.peopleInside;
        floors[this.position + 1].innerText = "";
        console.log(this.position);
      }
    }
  }

  function ElevatorController() {
    upButton.addEventListener('click', () => {
      model.up();
    });
    downButton.addEventListener('click', () => {
      model.down();
    });
    addPeople.addEventListener('click', () => {
      model.add();
    });
    takePeople.addEventListener('click', () => {
      model.take();
    });

    ElevatorView();
  }
  let controller = new ElevatorController();

  function ElevatorView() {
    currentFloor.innerText = model.peopleInside;
  }
}