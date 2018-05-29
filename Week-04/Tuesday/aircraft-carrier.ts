'use strict';
import { Aircraft } from './aircraft';
import { Carrier } from './carrier'

let carrier1: Carrier = new Carrier(5000, 2000);
let carrier2: Carrier = new Carrier(2000, 1000);

carrier1.add('F16');
carrier1.add('F35');
carrier1.add('F35');
carrier1.getStatus();
carrier1.fill();
carrier1.getStatus();
console.log('---------------');
console.log('---------------');
console.log('---------------');
carrier1.getStatus();
carrier2.getStatus();
console.log('---------------');
console.log('---------------');
console.log('---------------');
carrier1.fight(carrier2);
carrier1.getStatus();
carrier2.getStatus();
console.log('---------------');
console.log('---------------');
console.log('---------------');
carrier1.fill();
carrier1.fight(carrier2);
carrier1.getStatus();
carrier2.getStatus();