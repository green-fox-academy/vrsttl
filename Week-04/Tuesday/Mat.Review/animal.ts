'use strict';
class Animal {
  private belly: number = 0;
  protected hungryLevel: number;

  protected constructor(hungry: number){
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
export { Animal};