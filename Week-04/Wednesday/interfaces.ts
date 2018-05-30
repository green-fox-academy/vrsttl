interface Point {
  name: string,
  x: number,
  y: number,
}

function printPoint(point: { name: string, x: number, y: number }): void {
  console.log(`Coordinates of ${point.name}: ${point.x}, ${point.y}`);
}

let myObj = { name: 'P1', x: 10, y: 5 };
let myPoint: Point = {
  name: 'P2',
  x: 20,
  y: 10
}

printPoint(myObj);
printPoint({name: 'P3', x: 10, y:20});