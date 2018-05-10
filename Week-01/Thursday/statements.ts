let iLikeCats: boolean = true;
let iLikeDogs: boolean = true;


/*let i: number = 0;
while (i < 10) {
    console.log(`${i}`);
    i++;
}

do{
  console.log(`${i}`);
  i++;
} while (i < 10)*/

/*let somethingNew: number = 1;
switch(somethingNew){
    case 1:
      console.log('Hello');
    break;
    case 2:
      console.log('Ciao');
    break;
    case 3:
      console.log('Oh no!');
    break;
    default: 
      console.log('This is wrong.');
}*/
for (let i: number = 0; i < 3; i++) {
    if(i === 2){
        continue;
    }
    console.log(`${i}`);
}