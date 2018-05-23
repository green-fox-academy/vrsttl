'use strict';
export { };

class Domino {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
}

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();

function rearrange() {
  try {
    let output: any[] = [];
    output.push(dominoes[0]);
    for (let i: number = 1; i <= dominoes.length - 1; i++) {
      dominoes.forEach(element => {
        if (element.values[0] === output[i - 1].values[1]) {
          output.push(element);
        }
      });
    }
    print(output);
  }
  catch (error) {
    return 0;
  }
}
rearrange();


//You have the list of Dominoes
//Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
//eg: [2, 4], [4, 3], [3, 5] ...