'use strict';
export{};

let param : number = 0;
let result : number = 1; 

function factorio(){
  for (let i :number = param; i > 0; i--){
    result = result * i;
  }
return result;
}
console.log(factorio());

// -  Create a function called `factorio`
//    that returns it's input's factorial