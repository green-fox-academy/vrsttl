'use strict';
export { };
interface Printable {
  printAllFields(): void;
}

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  printAllFields() {
    return this.values;
  }
}

function initializeDominoes(): Domino[] {
  let dominoes: Domino[] = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}
let dominoes = initializeDominoes();

for (let domino of dominoes) {
  console.log(domino.printAllFields());
}

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

class Thing implements Printable {
  private name: string;
  private completed: boolean;
  constructor(name: string) {
    this.name = name;
  }
  public complete() {
    this.completed = true;
  }
  printAllFields() {
    return this.name;
  }
}
function fillTheFleet() {
  let fleet: Fleet = new Fleet();
  let thing1: Thing = new Thing('Get milk');
  let thing2: Thing = new Thing('Remove the obstacles');
  let thing3: Thing = new Thing('Stand up');
  let thing4: Thing = new Thing('Eat lunch');
  fleet.add(thing1);
  fleet.add(thing2);
  fleet.add(thing3);
  fleet.add(thing4);
  return fleet.getThings();
}

let variable = fillTheFleet();

for (let thing of variable) {
  console.log(thing.printAllFields());
}






