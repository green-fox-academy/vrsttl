'use strict';
export { };

function powerN(base: number, n: number): number {
  if (base <= 0 || n <= 0) {
    return base;
  } else {
    return (base * powerN(base, n - 1));
  };
}
console.log(powerN(4, 7));

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).