/*
let str: string = 'This is my original string.';
/*
console.log(str.indexOf('original'));
console.log(str.indexOf('!'));
console.log(str.indexOf('is', 4));

console.log(str.replace('original', 'new'));
console.log(str);

str = str.replace('original', 'new');
console.log(str);
let appleStr : string = 'apple';
console.log(appleStr.split('')); //splits into array of ind. chars
console.log(str.split(' ')); //splits into array with words
console.log(str.split(' ', 3)); //first three items go into array
*/
/*
console.log(str.slice(8,19)); //creates new string
console.log(str);
console.log(str.slice(8,-3)); //starts from end
console.log(str.slice(-1, 10)); //can`t be -1 in parameter 1

console.log(str.substring(8, 19));
console.log(str.substring(19, 8)); //swapping parameters automatically as a coding failsafe
console.log(str.substring(-1, 19)); //will replace -1 to 0 while compiling
*/
/*
console.log(str.charAt(11)); // === console.log(str[11])
console.log(str.concat(' I like it.'));
console.log(`${str} I like it.`);

*/

//key/value-pairs for objects:

let car = {
  brand: 'Audi',
  type: 'A6',
  color: 'blue',
  start: () => {
    console.log('wroooooom');
  }
};

console.log(typeof car);
console.log(car.type);
car.type = 'A1';  //
car['type'] = 'TT'; //changing keys values
console.log(car.type);

let keyStr = 'color';
console.log(car.type);
console.log(car[keyStr]); // logging a key's name

console.log(Object.keys(car)); //logs all values as an array
Object.keys(car).forEach(key => {
  console.log(key);
}); // logs all key names in new rows

console.log(Object.keys(car)); //logs all values as an array
Object.keys(car).forEach(key => {
  console.log(car[key]);
}); // logs all key VALUES in new rows
console.log(car.start());

console.log(car.hasOwnProperty('color'));

let objArray: any[] = [];
objArray.push({
  brand: 'BMW',
  type: 'M5',
  color: 'white',
  start: () => {
    console.log('wroooooom');
  }
})
console.log(objArray);
objArray.forEach(car => {
  console.log(`I have a(n) ${car.brand}`);
})