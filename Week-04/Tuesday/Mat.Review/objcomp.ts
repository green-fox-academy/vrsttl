'use strict';

class DigestiveSystem {
  private belly: number;
  private hungryLevel: number;

  public constructor(hungry: number) {
    this.belly = 0;
    this.hungryLevel = hungry;
  }
  public eat(): void {
    this.belly++;
  }
  public poop(): boolean {
    if (this.belly > 0) {
      this.belly--;
      return true;
    }
    return false
  }
  public isHungry() {
    return this.belly < this.hungryLevel;
  }
}

class Dog {
  private digestiveSystem: DigestiveSystem;
  constructor() {
    this.digestiveSystem = new DigestiveSystem(20);
  }
  public eat(): void {
    this.digestiveSystem.eat();
  }

  public poop(): boolean {
    return this.digestiveSystem.poop();
  }

  public isHungry(): boolean {
    return this.digestiveSystem.isHungry();
  }

  public reactToCucumber(): void {
    console.log('Sniff-sniff');
  }
}