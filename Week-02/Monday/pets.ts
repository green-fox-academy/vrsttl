function sayHello() {
  console.log('Hello World!');
}

/* function greet(greetStr: string, nameStr:string): void {
  console.log(`${greetStr} ${nameStr}!`);    
} */

//fallback argument:
/*
function greet(greetStr: string, nameStr: string = 'GFA', opt? : boolean, opt2? : string): void {
  if (opt) {
    console.log('Optional argument.')
  }
  console.log(`${greetStr} ${nameStr}!`);    
}

function multiply(a: number, b: number){
  let result = a * b;
  return result;
}

const sum = function (a: number, b: number): number {return a + b;
}

/*

sayHello();
greet('Hello', 'Secret', true);
console.log(multiply(2, 5));
console.log(sum(20, 17));
console.log(parseInt('2'));
console.log(parseFloat('2.879'));
console.log(typeof parseInt('2'));

*/

let pets : string[] = ['Morzsi' , 'Potyi' , 'Csibesz', 'Potyi'];
/*
console.log(pets[0]);pets.push('Mancs');
console.log(pets);
console.log(pets.length);
console.log(pets[pets.length - 1]);
//pets[pets.length + 1] = 'Vau';
console.log(pets);
console.log(pets[4]);
pets.unshift('Vau'); //first position insertion
console.log(pets);
const value = pets.shift(); //removing first element into new variable array
const lastValue = pets.pop();
console.log(value);
console.log(lastValue);

console.log(pets.indexOf('Potyi'));

const newPets = pets.slice(1,3);
console.log(newPets);

newPets.splice(1, 2,'Cezar');
console.log(newPets);
console.log(pets.concat(['Dog1', 'Dog2']));
//const array2 = pets.concat ([]);*/
console.log(pets);
for (let i : number = 0; i < pets.length ; i++) {
  console.log(pets[i])
}

pets.forEach(function(dog, index) {
  console.log(`#${index+1}: ${dog}`);
});

pets.forEach((dog, index) => {
  console.log(`#${index+1}: ${dog}`);
});

let helloDogs = pets.map(dog => {return `Hello, ${dog}`});
console.log(helloDogs);

const longNames = pets.filter(function(dog)  {
  return dog.length > 5;
});
console.log(longNames);

const longNames2 = pets.filter(dog => (dog.length > 5));
console.log(longNames2);