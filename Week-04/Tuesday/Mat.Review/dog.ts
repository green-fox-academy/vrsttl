'use strict';

import { Animal } from './animal';

class Dog extends Animal {
  constructor() {
    super(20);
  }
  public reactToCucumber(): void {
    console.log('sniff-sniff');
  }
}

let morzsi: Dog = new Dog();
morzsi.eat();
console.log(morzsi.isHungry());
morzsi.reactToCucumber();

export { Dog };