abstract class Car {
  brand: string;
  color: string;
  fuelAmount: number;

  constructor(brand: string, color: string) {
    this.brand = brand;
    this.color = color;
    this.fuelAmount = 0;
  }
  /*move(): void {
    console.log('Vroom-vroom');
  }*/
  abstract move(): void;
}


interface HybridCar {
  powerLevel: number;
  charge(amount: number): void;
}

class BMWFactory extends Car {
  constructor(color: string) {
    super('BMW', color);
  }
  move() {
    console.log('Vroom-vroom');
  }
}

class AudiFactory extends Car implements HybridCar {
  powerLevel: number;
  constructor(color: string) {
    super('AUDI', color);
    this.powerLevel = 0;
  }
  move() {
    console.log('VROOOOOOOOOOOOOOOOM');
  }
  charge(amount: number) {
    this.powerLevel = 10;
  };
}

const myAudi = new AudiFactory('white');
const myBMW = new BMWFactory('blue');
console.log(myBMW);
console.log(myAudi);
myAudi.move();
myBMW.move();


//const myCar = new Car('BMW', 'black');
//console.log(myCar);