'use strict';
export { };

class Counter {
  integer: number = 0;

  constructor(name: string, integer?: number) {
    this.integer = integer;
  }
  add(addto?: number) {
    if(addto!==undefined){
    this.integer += addto;}
    else {this.integer++};
  }
  get() {
    return this.integer.toString();
  }
}

let newCounter: Counter = new Counter('New',10);
console.log(newCounter);
newCounter.add(4);
console.log(newCounter);
newCounter.get();
console.log(newCounter.get());

/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/