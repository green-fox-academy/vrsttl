'use strict';
export { };

class Station {
  station: string = '';
  gasAmount: number = 1000;

  constructor(name: string, integer?: number) {
    this.station = name;
    this.gasAmount = integer;
  }
  refill(car) {
    this.gasAmount -= car.capacity;
    car.incGas();
    console.log(petrolStation);
    console.log(peugeot);
  }
}

class Car {
  gasAmount: number = 0;
  capacity: number = 100;
  constructor(gas?: number, capa?: number) {
    this.gasAmount = 0;
    this.capacity = 100;
  }
  incGas(car) {
    this.gasAmount += this.capacity;
  }
}

let petrolStation: Station = new Station('Shell', 5000);
console.log(petrolStation);
let peugeot: Car = new Car(0, 100);
console.log(peugeot);
petrolStation.refill(peugeot);

/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100*/