'use strict';
import { Animal } from './Animal';
import { Cat } from './Cat';
import { Dog } from './Dog';

let animals: Animal[] = [];
animals.push(new Dog());
animals.push(new Cat());
for (let i:number =0; i< animals.length; i++){
  animals[i].eat();
  console.log(animals[i].isHungry());
}