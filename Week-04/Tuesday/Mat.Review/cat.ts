'use strict';

import { Animal } from './animal';

class Cat extends Animal {
  constructor() {
    super(4);
  }
  public reactToCucumber(): void {
    throw new Error('WAAAAAAAAAARGH');
  }
  public meow() {
    console.log('Meow');
  }
}
let rose: Cat = new Cat();
rose.eat();
rose.reactToCucumber();

export { Cat };