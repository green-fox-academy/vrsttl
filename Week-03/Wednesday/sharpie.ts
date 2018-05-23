'use strict';
export { };

class Sharpie {
  color: string = '';
  width: number = 0;
  inkAmount: number = 0;

  constructor(color: string) {
    this.color = color;
    this.inkAmount = 100;
  }
  use() {
    this.inkAmount -= 10;
  }
}

let newSharpie: Sharpie = new Sharpie('black');
console.log(newSharpie);
newSharpie.use();
console.log(newSharpie);
/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/