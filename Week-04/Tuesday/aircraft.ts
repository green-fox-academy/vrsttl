'use strict';

export class Aircraft {
  type: string;
  maxAmmo: number;
  baseDamage: number;
  currentAmmo: number;
  priority: boolean = false;
  constructor(type: string) {
    this.type = type;
    if (type === 'F16') {
      this.maxAmmo = 8;
      this.baseDamage = 30;
    } else if (type === 'F35') {
      this.maxAmmo = 12;
      this.baseDamage = 50;
    }
    else {
      let error = new Error();
      console.log('The selected aircraft type doesn\'t exist.');
    };
    this.currentAmmo = 0;
  }
  fight() {
    if (this.currentAmmo > 0) {
      return this.currentAmmo * this.baseDamage;
    }
  }
  protected refill(depot: number) {
    this.currentAmmo += this.maxAmmo;
    return depot - this.maxAmmo;
  }
  protected getType() {
    return this.type;
  }
  protected getStatus() {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`;
  }
  protected getPriority() {
    if (this.priority) {
      return this.priority;
    }
  }
}
class F16 extends Aircraft {
  constructor(type: string = 'F16', maxAmmo: number = 8, baseDamage: number = 30) {
    super('F16');
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.currentAmmo = 0;
    this.priority = false;
  }
}
class F35 extends Aircraft {
  constructor(type: string = 'F16', maxAmmo: number = 12, baseDamage: number = 50) {
    super('F35');
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.currentAmmo = 0;
    this.priority = true;
  }
}