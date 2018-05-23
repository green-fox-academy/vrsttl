'use strict';

class Fleet {
  private things: Thing[];
  constructor() {
    this.things = [];
  }
  add(thing: Thing) {
    this.things.push(thing);
  }
  getThings() {
    return this.things;
  }
}

class Thing {
  private name: string;
  private completed: boolean;
  constructor(name: string) {
    this.name = name;
  }
  public complete() {
    this.completed = true;
  }
}

let fleet = new Fleet();
let thing1: Thing = new Thing('Get milk');
let thing2: Thing = new Thing('Remove the obstacles');
let thing3: Thing = new Thing('Stand up');
let thing4: Thing = new Thing('Eat lunch');

function printThisShit() {
  thing3.complete();
  thing4.complete();
  fleet.add(thing1);
  fleet.add(thing2);
  fleet.add(thing3);
  fleet.add(thing4);
  let workingFleet: any[] = fleet.getThings();
  let checkedStatus: string = '';
  for (let i: number = 0; i < fleet.getThings().length; i++) {
    if (workingFleet[i].completed === true) {
      checkedStatus = '[x]';
    }
    else {
      checkedStatus = '[ ]';
    }
    console.log(`${i + 1}. ${checkedStatus} ${workingFleet[i].name}`);
  }
}
printThisShit();

//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */