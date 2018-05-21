'use strict';
export { };

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let winnerStatus: string = '';

function ticTacResult(filePath: string) {
  try {
    let matchContent: string = fs.readFileSync(filePath, charEncoding);
    if (matchContent !== null) {
      let matchContentArray: string[] = matchContent.split('\r\n');
      matchContentArray.forEach(element => {
        let bufferZone: any[] = element.split('');
        let individualPlays: any[] = [];
        bufferZone.forEach(element => {
          if (element === 'X' || element === 'O') {
            individualPlays.push(element);
          }
        });
        if ((individualPlays[0] && individualPlays[1] && individualPlays[2]) === 'X' ||
          (individualPlays[3] && individualPlays[4] && individualPlays[5]) === 'X' ||
          (individualPlays[6] && individualPlays[7] && individualPlays[8]) === 'X' ||
          (individualPlays[0] && individualPlays[3] && individualPlays[6]) === 'X' ||
          (individualPlays[1] && individualPlays[4] && individualPlays[7]) === 'X' ||
          (individualPlays[2] && individualPlays[5] && individualPlays[8]) === 'X' ||
          (individualPlays[0] && individualPlays[4] && individualPlays[8]) === 'X' ||
          (individualPlays[2] && individualPlays[4] && individualPlays[6]) === 'X') {
          console.log(individualPlays);
          winnerStatus = 'X wins'
        }
        else if ((individualPlays[0] && individualPlays[1] && individualPlays[2]) === 'O' ||
          (individualPlays[3] && individualPlays[4] && individualPlays[5]) === 'O' ||
          (individualPlays[6] && individualPlays[7] && individualPlays[8]) === 'O' ||
          (individualPlays[0] && individualPlays[3] && individualPlays[6]) === 'O' ||
          (individualPlays[1] && individualPlays[4] && individualPlays[7]) === 'O' ||
          (individualPlays[2] && individualPlays[5] && individualPlays[8]) === 'O' ||
          (individualPlays[0] && individualPlays[4] && individualPlays[8]) === 'O' ||
          (individualPlays[2] && individualPlays[4] && individualPlays[6]) === 'O') {
          console.log(individualPlays);
          winnerStatus = 'O wins';
        } else {
          console.log(individualPlays);
          winnerStatus = 'It\'s a draw...';
        }
      });
    }
  } catch (error) {
    return 0;
  }

  console.log(winnerStatus);
}
ticTacResult('win-o.txt');

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
//console.log(ticTacResult('win-o.txt'))
// should print O
//console.log(ticTacResult('win-x.txt'))
// should print X
//console.log(ticTacResult('draw.txt'))
// should print draw