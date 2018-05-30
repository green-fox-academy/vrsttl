'use strict';
import { Animal, Mammal, Reptile, Bird, Bear, Crocodile, Hummingbird } from './animalsforzoo';

let firstBear: Bear = new Bear('Koala');
let firstCroc: Crocodile = new Crocodile('Crocodile');
let firstHummingbird: Hummingbird = new Hummingbird('Parrot');
console.log('How do you breed?');
console.log(`A ${firstBear.getname()} breeds by ${firstBear.breed()}`);
console.log(`A ${firstCroc.getname()} breeds by ${firstCroc.breed()}`);
console.log(`A ${firstHummingbird.getname()} breeds by ${firstHummingbird.breed()}`);