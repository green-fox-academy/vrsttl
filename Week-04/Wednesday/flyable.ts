'use strict';

import { Animal } from './animalsforzoo';

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  brand: string;
  color: string;
  fuel: string;
}

class Helicopter extends Vehicle implements Flyable {
  constructor(brand: string, color: string, fuel: string) {
    super();
    this.brand = brand;
    this.color = color;
    this.fuel = fuel;
  }
  land() {
    console.log(`This ${this.color}, ${this.brand} helicopter is running out of ${this.fuel} and lands now.`);
  }
  takeOff() {
    console.log(`This ${this.color}, ${this.brand} helicopter is being refueled with ${this.fuel} and is ready for take-off.`);
  }
  fly() {
    console.log(`This ${this.color}, ${this.brand} helicopter has plenty of ${this.fuel} and is in flight.`);
  }

}
abstract class Bird extends Animal implements Flyable {
  land() {
    console.log('Belly is empty. Need to land.');
  }
  takeOff() {
    console.log('Belly is full. Need to find a safe branch.');
  }
  fly() {
    console.log('I hope I can find some food before I get hungry flying.');
  }
}
class Owl extends Bird {
  getname() {
    return this.name;
  }
  breed() {
    return this.breed();
  }
  constructor(name: string, age: number, gender: string) {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
let newOwl: Owl = new Owl('Uhu', 17, 'Male');
newOwl.land();
newOwl.takeOff();
newOwl.fly();

let newHelicopter: Helicopter = new Helicopter('Sikorsky', 'black', 'kerosene');
newHelicopter.land();
newHelicopter.takeOff();
newHelicopter.fly();