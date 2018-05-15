'use strict';
export{};
let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(a){
let newSweets : any[] = shopItems.map(shopItems => {
  return shopItems === 2 || shopItems === false;    
});
 newSweets[0] = 'Croissant';
 newSweets[1] = 'Ice Cream';
 shopItems[1] = newSweets[0];
 shopItems[3] = newSweets[1];
 return shopItems;
}

console.log(sweets(shopItems));




// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
export = sweets;