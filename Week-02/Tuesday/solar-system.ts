'use strict';
export{};

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];


//planetList.push('Saturn');
//console.log(planetList);

function putSaturn(){
  planetList.push('Saturn');
  return planetList;
}


console.log(putSaturn());




export = putSaturn;


// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"