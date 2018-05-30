'use strict';
abstract class Instrument {
  protected name: string;
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  soundItMakes: string;
  abstract sound(): void;
  play() {
    console.log(this.sound());
  }
}

class ElectricGuitar extends StringedInstrument {
  constructor(stringNumber: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = stringNumber;
    this.soundItMakes = 'TWANG';
  }
  sound() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundItMakes}`;
  }
}

class BassGuitar extends StringedInstrument {
  constructor(stringNumber: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = stringNumber;
    this.soundItMakes = 'Duum-duum-duum';
  }
  sound() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundItMakes}`;
  }
}

class Violin extends StringedInstrument {
  constructor(stringNumber: number = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = stringNumber;
    this.soundItMakes = 'Screech';
  }
  sound() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.soundItMakes}`;
  }
}

let instr1: ElectricGuitar = new ElectricGuitar(6);
let instr2: BassGuitar = new BassGuitar(4);
let instr3: Violin = new Violin(4);
let instr4: ElectricGuitar = new ElectricGuitar(7);
let instr5: BassGuitar = new BassGuitar(5);
instr1.play();
instr2.play();
instr3.play();
instr4.play();
instr5.play();