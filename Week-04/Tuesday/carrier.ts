'use strict';
import { Aircraft } from './aircraft';
export class Carrier {
  initialAmmo: number = 0;
  hp: number = 0;
  planes: Aircraft[];
  isDead: boolean = false;
  constructor(hitpoints: number, baseAmmo: number) {
    this.initialAmmo = baseAmmo;
    this.hp = hitpoints;
    this.isDead = false;
    this.planes = [];
  }
  add(type: string): void {
    let newPlane: Aircraft = new Aircraft(type);
    this.planes.push(newPlane);
  }
  fill(): void {
    let totalAmmoCapacity: number = 0;
    this.planes.forEach(element => {
      totalAmmoCapacity += element.maxAmmo;
    });
    if (this.initialAmmo >= totalAmmoCapacity) {
      this.planes.forEach(element => {
        element.currentAmmo += element.maxAmmo;
        this.initialAmmo -= element.maxAmmo;
      });
    }
    else if (this.initialAmmo < totalAmmoCapacity && this.initialAmmo !== 0) {
      this.planes.forEach(element => {
        if (element.priority === true) {
          element.currentAmmo += element.maxAmmo;
          this.initialAmmo -= element.maxAmmo;
        };
      });
    } else {
      throw new Error('Out of ammo');
    }
  }
  fight(carrier: Carrier) {
    let damageOutput: number = 0;
    this.planes.forEach(element => {
      damageOutput += element.fight();
      element.currentAmmo = 0;
    });
    carrier.hp = carrier.hp - damageOutput;
    if (carrier.hp <= 0) {
      carrier.isDead = true;
    }
  }
  getStatus() {
    let totalDamage: number = 0;
    this.planes.forEach(element => {
      totalDamage += element.fight();
    });
    console.log(`HP: ${this.hp}, Aircraft count: ${this.planes.length}, Ammo Storage: ${this.initialAmmo}, Total damage: ${totalDamage}`);
    console.log('Aircraft:')
    for (let i: number = 0; i < this.planes.length; i++) {
      console.log(`Type: ${this.planes[i].type}, Ammo: ${this.planes[i].currentAmmo}, Base Damage: ${this.planes[i].baseDamage}, All Damage: ${this.planes[i].fight()}`);
    }
    if (this.isDead) {
      console.log('This ship is dead, Jimmy.');
    }
  }
}
