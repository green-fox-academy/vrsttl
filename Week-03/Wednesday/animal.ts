'use strict';
export { };

class Animal {
  hunger: number = 0;
  thirst: number = 0;

  constructor(name: string) {
    this.hunger = 50;
    this.thirst = 50;
  }
  eat() {
    this.hunger -= 1;
  }
  drink() {
    this.thirst -= 1;
  }
  play() {
    this.hunger += 1;
    this.thirst += 1;
  }
}

let cat: Animal = new Animal('cica');
cat.play();
cat.play();
console.log(cat);
cat.drink();
cat.eat();
console.log(cat);
/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/