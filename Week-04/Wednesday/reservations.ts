'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  DOW: string;
  code: string;
  constructor() {
    this.DOW = this.getDowBooking();
    this.code = this.getCodeBooking();
  }
  getDowBooking() {
    let dowArray: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let resDOW = dowArray[Math.floor(Math.random() * dowArray.length)];
    return resDOW;
  }
  getCodeBooking() {
    let charArray: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let resCode: string = ''
    for (let i: number = 0; i < 8; i++) {
      resCode += charArray[Math.floor(Math.random() * charArray.length)]
    }
    return resCode;
  }
}

function initializeReservations(howManyTimes: number): Reservation[] {
  let reservations: Reservation[] = [];
  for (let i: number = 0; i <= Math.floor((Math.random() * howManyTimes) + 1); i++) {
    reservations.push(new Reservation());
  }
  return reservations;
}

let reservations = initializeReservations(250);

for (let reservation of reservations) {
  console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
}

