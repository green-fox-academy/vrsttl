'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected origin: string;
  protected winterProof: boolean;
  abstract getname(): void;
  abstract breed(): void;
}

export abstract class Reptile extends Animal {
  breedsBy: string;
  hasFeathers: boolean;
  flies: boolean;
  lactates: boolean;
  getname() {
    return this.name;
  }
  breed() {
    return this.breedsBy;
  }
}

export abstract class Mammal extends Animal {
  breedsBy: string;
  hasFeathers: boolean;
  flies: boolean;
  lactates: boolean;
  getname() {
    return this.name;
  }
  breed() {
    return this.breedsBy;
  }
}

export abstract class Bird extends Animal {
  breedsBy: string;
  hasFeathers: boolean;
  flies: boolean;
  lactates: boolean;
  getname() {
    return this.name;
  }
  breed() {
    return this.breedsBy;
  }
}

export class Bear extends Mammal {
  constructor(name: string, age: number = 5, gender: string = 'male') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breedsBy = 'Live birth';
    this.flies = false;
    this.lactates = true;
    this.origin = 'Russia';
    this.winterProof = true;
    this.hasFeathers = false;
  }
}
export class Crocodile extends Reptile {
  constructor(name: string, age: number = 8, gender: string = 'female') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breedsBy = 'Egg';
    this.flies = false;
    this.lactates = false;
    this.origin = 'Egypt';
    this.winterProof = false;
    this.hasFeathers = false;
  }
}
export class Hummingbird extends Bird {
  constructor(name: string, age: number = 2, gender: string = 'male') {
    super();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breedsBy = 'Egg';
    this.flies = true;
    this.lactates = false;
    this.origin = 'Indonesia';
    this.winterProof = false;
    this.hasFeathers = true;
  }
}